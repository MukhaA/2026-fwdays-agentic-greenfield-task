import { describe, expect, it } from "vitest";
import { formatCompact, formatKb, formatYears } from "./format";

describe("formatCompact", () => {
  it("leaves small numbers intact", () => {
    expect(formatCompact(0)).toBe("0");
    expect(formatCompact(950)).toBe("950");
  });

  it("compacts thousands with a lowercase k", () => {
    expect(formatCompact(5600)).toBe("5.6k");
    expect(formatCompact(12000)).toBe("12k");
  });

  it("compacts millions with an uppercase M", () => {
    expect(formatCompact(2_400_000)).toBe("2.4M");
  });
});

describe("formatYears", () => {
  it("suffixes with y", () => {
    expect(formatYears(5)).toBe("5y");
    expect(formatYears(0)).toBe("0y");
  });
});

describe("formatKb", () => {
  it("keeps small sizes in KB", () => {
    expect(formatKb(350)).toBe("350 KB");
  });

  it("promotes to MB and GB, trimming trailing .0", () => {
    expect(formatKb(1024)).toBe("1 MB");
    expect(formatKb(1536)).toBe("1.5 MB");
    expect(formatKb(1024 * 1024)).toBe("1 GB");
  });
});
