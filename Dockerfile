# 基础镜像，使用 Node.js 18 的 Alpine 版本
FROM node:18-alpine AS base

# 设置工作目录
WORKDIR /app

# 安装依赖阶段
FROM base AS deps
# 配置 npm 使用国内镜像源（可选，加速依赖安装）
RUN npm config set registry https://registry.npmmirror.com
# 复制包管理文件
COPY package.json package-lock.json* ./
# 安装依赖
RUN npm ci --prefer-offline --no-audit

# 构建阶段
FROM base AS builder
WORKDIR /app
# 从 deps 阶段复制 node_modules
COPY --from=deps /app/node_modules ./node_modules
# 复制项目文件
COPY . .
# COPY ./.env.production ./.env.production
# 禁用 Next.js 遥测（避免网络超时）
ENV NEXT_TELEMETRY_DISABLED=1
# 执行构建
RUN npm run build

# 生产运行阶段
FROM base AS runner
WORKDIR /app

# 设置生产环境变量
ENV NODE_ENV=production
# 创建非 root 用户
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

# 复制构建产物和必要文件
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
# COPY --from=builder --chown=nextjs:nodejs /app/.env.production ./.env.production

# 切换到非 root 用户
USER nextjs

# 暴露端口
EXPOSE 3001

# 设置运行时端口
ENV PORT=3001

# 启动命令，使用 npm start 运行 Next.js 服务
CMD ["npm", "start"]