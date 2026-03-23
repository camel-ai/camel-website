import StackSection from "@/components/techstack/stacksection";
import {
  agent,
  agentSociety,
  dataGeneration,
  models,
  tools,
  memories,
  storage,
  dataLoaders,
  environments,
  interpreters,
  retrievers,
  runtime,
  verifier,
  mcp,
  humanInTheLoop,
  observe,
} from "./content";

function withItemClickHandlers<T extends { items: Array<{ url?: string }> }>(section: T) {
  return {
    ...section,
    items: section.items.map((item) => ({
      ...item,
      onClick: () => {
        if (item.url) {
          window.open(item.url, "_blank");
        }
      },
    })),
  };
}

function TechStackContent() {
  const agentData = withItemClickHandlers(agent);
  const agentSocietyData = withItemClickHandlers(agentSociety);
  const dataGenerationData = withItemClickHandlers(dataGeneration);
  const modelsData = withItemClickHandlers(models);
  const toolsData = withItemClickHandlers(tools);
  const memoriesData = withItemClickHandlers(memories);
  const storageData = withItemClickHandlers(storage);
  const dataLoadersData = withItemClickHandlers(dataLoaders);
  const environmentsData = withItemClickHandlers(environments);
  const interpretersData = withItemClickHandlers(interpreters);
  const retrieversData = withItemClickHandlers(retrievers);
  const runtimeData = withItemClickHandlers(runtime);
  const verifierData = withItemClickHandlers(verifier);
  const mcpData = withItemClickHandlers(mcp);
  const humanInTheLoopData = withItemClickHandlers(humanInTheLoop);
  const observeData = withItemClickHandlers(observe);

  return (
    <div className="mx-auto w-full max-w-[1200px] flex-1 py-6 md:py-8">
      <div className="font-display-title text-text-pirmary flex flex-col items-center justify-center py-3 text-sm font-semibold sm:text-base md:py-4">
        Updated on March 23, 2026
      </div>
      <div className="flex flex-col">
        <StackSection
          title={agentData.title}
          subtitle={agentData.subtitle}
          items={agentData.items}
          variant={agent.variant as "neon"}
        />
        <StackSection
          title={agentSocietyData.title}
          subtitle={agentSocietyData.subtitle}
          items={agentSocietyData.items}
          variant={agentSociety.variant as "neon"}
        />
        <StackSection
          title={dataGenerationData.title}
          items={dataGenerationData.items}
          variant={dataGeneration.variant as "bone"}
        />
        <StackSection
          title={modelsData.title}
          items={modelsData.items}
          variant={models.variant as "green"}
        />
        <StackSection
          title={toolsData.title}
          items={toolsData.items}
          variant={tools.variant as "yellow"}
        />
        <StackSection title={memoriesData.title} items={memoriesData.items} variant={"pink"} />
        <StackSection
          title={storageData.title}
          items={storageData.items}
          variant={storage.variant as "orange"}
          grouped={true}
        />
        <StackSection
          title={dataLoadersData.title}
          items={dataLoadersData.items}
          variant={dataLoaders.variant as "grey"}
        />
        <StackSection
          title={environmentsData.title}
          items={environmentsData.items}
          variant={environments.variant as "grey"}
        />
        <StackSection
          title={interpretersData.title}
          items={interpretersData.items}
          variant={interpreters.variant as "grey"}
        />
        <StackSection
          title={retrieversData.title}
          items={retrieversData.items}
          variant={retrievers.variant as "grey"}
        />
        <StackSection
          title={runtimeData.title}
          items={runtimeData.items}
          variant={runtime.variant as "grey"}
        />
        <StackSection
          title={verifierData.title}
          items={verifierData.items}
          variant={verifier.variant as "grey"}
        />
        <StackSection title={mcpData.title} items={mcpData.items} variant={mcp.variant as "red"} />
        <StackSection
          title={humanInTheLoopData.title}
          items={humanInTheLoopData.items}
          variant={humanInTheLoop.variant as "blue"}
        />
        <StackSection
          title={observeData.title}
          items={observeData.items}
          variant={observe.variant as "blue"}
        />
      </div>
    </div>
  );
}

export default TechStackContent;
