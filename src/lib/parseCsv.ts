/** Parse a single CSV line (commas inside quotes are ignored as delimiters). */
export function parseCsvLine(line: string): string[] {
	const out: string[] = [];
	let cur = "";
	let q = false;
	for (let i = 0; i < line.length; i++) {
		const c = line[i];
		if (c === '"') {
			q = !q;
			continue;
		}
		if (!q && c === ",") {
			out.push(cur);
			cur = "";
			continue;
		}
		cur += c;
	}
	out.push(cur);
	return out;
}

/** Parse full CSV text into rows. Empty lines are skipped. */
export function parseCsv(text: string): string[][] {
	return text
		.trim()
		.split(/\r?\n/)
		.filter((line) => line.length > 0)
		.map(parseCsvLine);
}
