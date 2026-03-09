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

function TechStackContent() {
  // Handle item clicks to open URLs
  const handleItemClick = (item: { url?: string }) => {
    if (item.url) {
      window.open(item.url, "_blank");
    }
  };

  // Transform techstack data to include click handlers
  const agentData = {
    ...agent,
    items: agent.items.map((item) => ({
      ...item,
      onClick: () => handleItemClick(item),
    })),
  };

  const agentSocietyData = {
    ...agentSociety,
    items: agentSociety.items.map((item) => ({
      ...item,
      onClick: () => handleItemClick(item),
    })),
  };

  const modelsData = {
    ...models,
    items: models.items.map((item) => ({
      ...item,
      onClick: () => handleItemClick(item),
    })),
  };

  const storageData = {
    ...storage,
    items: storage.items.map((item) => ({
      ...item,
      onClick: () => handleItemClick(item),
    })),
  };

  return (
    <div className="mx-auto w-full max-w-[1200px] flex-1 py-6 md:py-8">
      <div className="font-display-title text-text-pirmary flex flex-col items-center justify-center py-3 text-sm font-semibold sm:text-base md:py-4">
        Updated on July 18, 2025
      </div>
      <div className="flex flex-col">
        {/* Agent Section */}
        <StackSection
          title={agentData.title}
          subtitle={agentData.subtitle}
          items={agentData.items}
          variant={agent.variant as "neon"}
        />
        {/* Agent Society Section */}
        <StackSection
          title={agentSocietyData.title}
          subtitle={agentSocietyData.subtitle}
          items={agentSocietyData.items}
          variant={agentSociety.variant as "neon"}
        />
        {/* Data Generation Section */}
        <StackSection
          title={dataGeneration.title}
          items={dataGeneration.items}
          variant={dataGeneration.variant as "bone"}
        />
        {/* Models Section */}
        <StackSection
          title={modelsData.title}
          items={modelsData.items}
          variant={models.variant as "green"}
        />
        {/* Tools Section */}
        <StackSection title={tools.title} items={tools.items} variant={tools.variant as "yellow"} />
        {/* Memories Section */}
        <StackSection title={memories.title} items={memories.items} variant={"pink"} />
        {/* Storage Section */}
        <StackSection
          title={storageData.title}
          items={storageData.items}
          variant={storageData.variant as "orange"}
          grouped={true}
        />
        {/* Data Loaders Section */}
        <StackSection
          title={dataLoaders.title}
          items={dataLoaders.items}
          variant={dataLoaders.variant as "grey"}
        />
        {/* Environments Section */}
        <StackSection
          title={environments.title}
          items={environments.items}
          variant={environments.variant as "grey"}
        />
        {/* Interpreters Section */}
        <StackSection
          title={interpreters.title}
          items={interpreters.items}
          variant={interpreters.variant as "grey"}
        />
        {/* Retrievers Section */}
        <StackSection
          title={retrievers.title}
          items={retrievers.items}
          variant={retrievers.variant as "grey"}
        />
        {/* Runtime Section */}
        <StackSection
          title={runtime.title}
          items={runtime.items}
          variant={runtime.variant as "grey"}
        />
        {/* Verifier Section */}
        <StackSection
          title={verifier.title}
          items={verifier.items}
          variant={verifier.variant as "grey"}
        />
        {/* MCP Section */}
        <StackSection title={mcp.title} items={mcp.items} variant={mcp.variant as "red"} />
        {/* Human In The Loop Section */}
        <StackSection
          title={humanInTheLoop.title}
          items={humanInTheLoop.items}
          variant={humanInTheLoop.variant as "blue"}
        />
        {/* Observe Section */}
        <StackSection
          title={observe.title}
          items={observe.items}
          variant={observe.variant as "blue"}
        />
      </div>
    </div>
  );
}

export default TechStackContent;
