export interface IList {
	/*
	・id は途中で変えないので、 readonly 修飾子を付ける（値を変えるとエラーが発生）
	・数値なので number 型
	*/
	readonly id: number;
	name: string; // 文字列なので string 型
	cards: ICard[]; // 配列を定義するには `要素[]` とする
}

export interface ICard {
	readonly id: number;
	readonly text: string;
}
