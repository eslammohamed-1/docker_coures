import type { Component } from 'vue'
import CourseRoadmapDiagram from '../diagrams/CourseRoadmapDiagram.vue'
import VmEvolutionDiagram from '../diagrams/VmEvolutionDiagram.vue'
import VmLayersDiagram from '../diagrams/VmLayersDiagram.vue'
import KernelUserModeDiagram from '../diagrams/KernelUserModeDiagram.vue'
import SharedKernelDiagram from '../diagrams/SharedKernelDiagram.vue'
import DockerDesktopDiagram from '../diagrams/DockerDesktopDiagram.vue'
import ClientServerDiagram from '../diagrams/ClientServerDiagram.vue'
import ContainerVsVmDiagram from '../diagrams/ContainerVsVmDiagram.vue'
import SingleProcessDiagram from '../diagrams/SingleProcessDiagram.vue'
import DockerRunFlowDiagram from '../diagrams/DockerRunFlowDiagram.vue'
import DockerEngineDiagram from '../diagrams/DockerEngineDiagram.vue'
import PhysicalServerDiagram from '../diagrams/PhysicalServerDiagram.vue'
import VmTaxChart from '../diagrams/VmTaxChart.vue'
import ImageLayersDiagram from '../diagrams/ImageLayersDiagram.vue'
import RegistryHierarchyDiagram from '../diagrams/RegistryHierarchyDiagram.vue'
import ImageManifestDiagram from '../diagrams/ImageManifestDiagram.vue'
import DockerStorageDiagram from '../diagrams/DockerStorageDiagram.vue'
import DockerfileBuildDiagram from '../diagrams/DockerfileBuildDiagram.vue'
import ContainerLifecycleDiagram from '../diagrams/ContainerLifecycleDiagram.vue'
import VscodeDockerWorkflowDiagram from '../diagrams/VscodeDockerWorkflowDiagram.vue'
import ResourceUtilizationDiagram from '../diagrams/ResourceUtilizationDiagram.vue'
import PhysicalScalingProblemDiagram from '../diagrams/PhysicalScalingProblemDiagram.vue'
import VirtualizationArchitectureDiagram from '../diagrams/VirtualizationArchitectureDiagram.vue'
import HypervisorRoleDiagram from '../diagrams/HypervisorRoleDiagram.vue'
import VmStackDiagram from '../diagrams/VmStackDiagram.vue'
import VmTaxOverheadDiagram from '../diagrams/VmTaxOverheadDiagram.vue'
import MultipleVmsOverheadDiagram from '../diagrams/MultipleVmsOverheadDiagram.vue'
import ContainerArchitectureDiagram from '../diagrams/ContainerArchitectureDiagram.vue'
import ContainerPackageDiagram from '../diagrams/ContainerPackageDiagram.vue'
import ImageToContainerDiagram from '../diagrams/ImageToContainerDiagram.vue'
import DeploymentComparisonDiagram from '../diagrams/DeploymentComparisonDiagram.vue'
import VmContainersNestedDiagram from '../diagrams/VmContainersNestedDiagram.vue'
import EvolutionTimelineDiagram from '../diagrams/EvolutionTimelineDiagram.vue'
import VmInternalStackDiagram from '../diagrams/VmInternalStackDiagram.vue'
import BaseDiskDifferencingDiagram from '../diagrams/BaseDiskDifferencingDiagram.vue'
import NamespacesCgroupsDiagram from '../diagrams/NamespacesCgroupsDiagram.vue'
import ContainerProcessTreeDiagram from '../diagrams/ContainerProcessTreeDiagram.vue'
import FullContainerArchitectureDiagram from '../diagrams/FullContainerArchitectureDiagram.vue'
import type { DiagramId } from '../types/chapterDisplay'

export const diagramMap: Record<DiagramId, Component> = {
  CourseRoadmapDiagram,
  VmEvolutionDiagram,
  VmLayersDiagram,
  KernelUserModeDiagram,
  SharedKernelDiagram,
  DockerDesktopDiagram,
  ClientServerDiagram,
  ContainerVsVmDiagram,
  SingleProcessDiagram,
  DockerRunFlowDiagram,
  DockerEngineDiagram,
  PhysicalServerDiagram,
  VmTaxChart,
  ImageLayersDiagram,
  RegistryHierarchyDiagram,
  ImageManifestDiagram,
  DockerStorageDiagram,
  DockerfileBuildDiagram,
  ContainerLifecycleDiagram,
  VscodeDockerWorkflowDiagram,
  ResourceUtilizationDiagram,
  PhysicalScalingProblemDiagram,
  VirtualizationArchitectureDiagram,
  HypervisorRoleDiagram,
  VmStackDiagram,
  VmTaxOverheadDiagram,
  MultipleVmsOverheadDiagram,
  ContainerArchitectureDiagram,
  ContainerPackageDiagram,
  ImageToContainerDiagram,
  DeploymentComparisonDiagram,
  VmContainersNestedDiagram,
  EvolutionTimelineDiagram,
  VmInternalStackDiagram,
  BaseDiskDifferencingDiagram,
  NamespacesCgroupsDiagram,
  ContainerProcessTreeDiagram,
  FullContainerArchitectureDiagram,
}

export function getDiagramComponent(id?: string): Component | null {
  if (!id) return null
  return diagramMap[id as DiagramId] ?? null
}
