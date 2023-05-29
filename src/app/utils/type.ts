interface Item {
  type: number;
  point: number;
}

interface Step {
  point: number;
  selections: any[];
}

export type { Item, Step };
