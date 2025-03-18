export enum SummaryLength {
  SHORT = 'brief',
  STANDARD = 'standard',
  DETAILED = 'comprehensive',
}

export enum SummaryFormat {
  BULLET_POINTS = 'bullet-points',
  NARRATIVE = 'narrative',
  DEFAULT = 'default',
}

export enum SummaryModel {
  OPENAI = 'openai',
  DEEPSEEK = 'deepseek',
  DEFAULT = OPENAI,
}

export enum SummarySpeed {
  FAST = 'fast',
  SLOW = 'slow',
  DEFAULT = FAST,
}
