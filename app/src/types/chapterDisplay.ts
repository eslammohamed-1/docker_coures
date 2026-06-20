export type DisplayBlockType =
  | 'paragraph'
  | 'code'
  | 'list'
  | 'note'
  | 'heading'
  | 'definition'
  | 'comparison'
  | 'steps'
  | 'command'
  | 'warning'
  | 'flow'
  | 'summary'
  | 'table'
  | 'glossary'
  | 'questions'
  | 'takeaway'

export interface DisplayBlock {
  type: DisplayBlockType
  content: string
  sourceSegmentRange?: [number, number]
}

export interface DisplaySection {
  id: string
  heading: string
  blocks: DisplayBlock[]
  diagramId?: string
  diagramIds?: string[]
}

export interface ChapterDisplayMetadata {
  sourceSegmentCount: number
  blockCount: number
}

export interface ChapterDisplay {
  chapterNumber: number
  title: string
  folderName: string
  formattedAt: string
  model: string
  sections: DisplaySection[]
  metadata: ChapterDisplayMetadata
}

export const DIAGRAM_IDS = [
  'CourseRoadmapDiagram',
  'VmEvolutionDiagram',
  'VmLayersDiagram',
  'KernelUserModeDiagram',
  'SharedKernelDiagram',
  'DockerDesktopDiagram',
  'ClientServerDiagram',
  'ContainerVsVmDiagram',
  'SingleProcessDiagram',
  'DockerRunFlowDiagram',
  'DockerEngineDiagram',
  'PhysicalServerDiagram',
  'VmTaxChart',
  'ImageLayersDiagram',
  'RegistryHierarchyDiagram',
  'ImageManifestDiagram',
  'DockerStorageDiagram',
  'DockerfileBuildDiagram',
  'ContainerLifecycleDiagram',
  'VscodeDockerWorkflowDiagram',
  'ResourceUtilizationDiagram',
  'PhysicalScalingProblemDiagram',
  'VirtualizationArchitectureDiagram',
  'HypervisorRoleDiagram',
  'VmStackDiagram',
  'VmTaxOverheadDiagram',
  'MultipleVmsOverheadDiagram',
  'ContainerArchitectureDiagram',
  'ContainerPackageDiagram',
  'ImageToContainerDiagram',
  'DeploymentComparisonDiagram',
  'VmContainersNestedDiagram',
  'EvolutionTimelineDiagram',
  'VmInternalStackDiagram',
  'BaseDiskDifferencingDiagram',
  'NamespacesCgroupsDiagram',
  'ContainerProcessTreeDiagram',
  'FullContainerArchitectureDiagram',
] as const

export type DiagramId = (typeof DIAGRAM_IDS)[number]
