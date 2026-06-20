import type { Chapter } from '../types/chapter'

export const chapters: Chapter[] = [
  { number: 1, title: 'Intro', folderName: '01_Intro', startTime: 0, endTime: 30, section: 'docker', isAvailable: true },
  { number: 2, title: 'Introduction to Containers', folderName: '02_Introduction_to_Containers', startTime: 30, endTime: 1189, section: 'docker', isAvailable: true },
  { number: 3, title: 'Container Architecture', folderName: '03_Container_Architecture', startTime: 1189, endTime: 3014, section: 'docker', isAvailable: true },
  { number: 4, title: 'Introduction to Docker', folderName: '04_Introduction_to_Docker', startTime: 3014, endTime: 4058, section: 'docker', isAvailable: true },
  { number: 5, title: 'Installing Docker', folderName: '05_Installing_Docker', startTime: 4058, endTime: 5237, section: 'docker', isAvailable: true },
  { number: 6, title: 'Container = Application', folderName: '06_Container__Application', startTime: 5237, endTime: 6201, section: 'docker', isAvailable: true },
  { number: 7, title: 'Docker Engine Architecture', folderName: '07_Docker_Engine_Architecture', startTime: 6201, endTime: 6677, section: 'docker', isAvailable: true },
  { number: 8, title: 'Images - Deep Dive', folderName: '08_Images_-_Deep_Dive', startTime: 6677, endTime: 9437, section: 'docker', isAvailable: true },
  { number: 9, title: 'Docker in VSCode', folderName: '09_Docker_in_VSCode', startTime: 9437, endTime: 10108, section: 'docker', isAvailable: true },
  { number: 10, title: 'Containers - Deep Dive', folderName: '10_Containers_-_Deep_Dive', startTime: 10108, endTime: 11020, section: 'docker', isAvailable: true },
  { number: 11, title: 'Network', folderName: '11_Network', startTime: 11020, endTime: 13651, section: 'docker', isAvailable: false },
  { number: 12, title: 'Storage', folderName: '12_Storage', startTime: 13651, endTime: 15742, section: 'docker', isAvailable: true },
  { number: 13, title: 'Containerizing an Application', folderName: '13_Containerizing_an_Application', startTime: 15742, endTime: 17723, section: 'docker', isAvailable: true },
  { number: 14, title: 'Dockerfile - Deep Dive', folderName: '14_Dockerfile_-_Deep_Dive', startTime: 17723, endTime: 21938, section: 'docker', isAvailable: false },
  { number: 15, title: 'Image Registries', folderName: '15_Image_Registries', startTime: 21938, endTime: 22570, section: 'docker', isAvailable: false },
  { number: 16, title: 'Docker Compose', folderName: '16_Docker_Compose', startTime: 22570, endTime: 25492, section: 'docker', isAvailable: false },
  { number: 17, title: 'Docker Swarm', folderName: '17_Docker_Swarm', startTime: 25492, endTime: 29057, section: 'docker', isAvailable: false },
  { number: 18, title: 'Docker Stack', folderName: '18_Docker_Stack', startTime: 29057, endTime: 30435, section: 'docker', isAvailable: false },
  { number: 19, title: 'Portainer', folderName: '19_Portainer', startTime: 30435, endTime: 30997, section: 'docker', isAvailable: false },
  { number: 20, title: 'Introduction to Kubernetes', folderName: '20_Introduction_to_Kubernetes', startTime: 30997, endTime: 31285, section: 'kubernetes', isAvailable: false },
  { number: 21, title: 'K8s High Level Architecture', folderName: '21_K8s_High_Level_Architecture', startTime: 31285, endTime: 32170, section: 'kubernetes', isAvailable: false },
  { number: 22, title: 'Installing Minikube', folderName: '22_Installing_Minikube', startTime: 32170, endTime: 32876, section: 'kubernetes', isAvailable: false },
  { number: 23, title: 'K8s Logical Architecture', folderName: '23_K8s_Logical_Architecture', startTime: 32876, endTime: 33806, section: 'kubernetes', isAvailable: false },
  { number: 24, title: 'K8s Sample Deployment', folderName: '24_K8s_Sample_Deployment', startTime: 33806, endTime: 36081, section: 'kubernetes', isAvailable: false },
  { number: 25, title: 'K8s in VSCode', folderName: '25_K8s_in_VSCode', startTime: 36081, endTime: 36352, section: 'kubernetes', isAvailable: false },
  { number: 26, title: 'Jupyter in Containers', folderName: '26_Jupyter_in_Containers', startTime: 36352, endTime: 37200, section: 'bonus', isAvailable: false },
]

export function getChapterByNumber(number: number): Chapter | undefined {
  return chapters.find((c) => c.number === number)
}

export function getAdjacentChapter(number: number, direction: 'prev' | 'next'): Chapter | undefined {
  const index = chapters.findIndex((c) => c.number === number)
  if (index === -1) return undefined
  const nextIndex = direction === 'prev' ? index - 1 : index + 1
  return chapters[nextIndex]
}

export const availableCount = chapters.filter((c) => c.isAvailable).length
