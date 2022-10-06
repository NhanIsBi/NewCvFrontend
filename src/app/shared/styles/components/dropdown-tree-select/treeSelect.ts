export class TreeSelect {
  key: string;
  label: string;
  value: { text: string; label: string; value: boolean }[];
  constructor(clone?: TreeSelect) {
    if (clone) {
      this.key = clone.key;
      this.label = clone.label;
      this.value = clone.value.map((it) => ({ ...it }));
    } else {
      this.key = '';
      this.label = '---';
      this.value = [];
    }
  }
}
