import React from 'react';

export interface Stack {
  id: number;
  name: string;
  isPublic: number;
  desc: string;
  svg: React.ReactNode | string;
  svgName: string;
  updated: string;
  starred: number;
  link?: string;
}

export interface Company {
  id: string;
  name: string;
  subName: string;
  folderName: string;
  startDate: string;
  lastDay: string;
  position: string;
  desc: string;
  summary: string[];
}

export interface MDFile {
  content: string;
  title: string;
  frontMatter: {};
}
