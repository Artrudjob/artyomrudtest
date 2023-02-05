export default interface ITreeItem {
	selected?: boolean;
	id?: number;
	type: string,
	name: string,
	size?: string,
	time?: string,
	contents?: ITreeItem[]
}
