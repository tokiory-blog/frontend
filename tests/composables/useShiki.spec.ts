import { ShikiParams, useShiki } from "@cms/useShiki";
import { JSDOM } from "jsdom";

const LINE_OF_CODE_CLASS = ".line";

describe("[Composable] useShiki", () => {
  it("Empty code should return some layout", async () => {

    // Parse code
    const template: ShikiParams = {
      language: "typescript",
      code: ""
    };
    const code = await useShiki(template);

    // Parse HTML
    const parser = new JSDOM(code);
    const preElement =
      parser.window.document.body
        .querySelector("pre");

    // Checking for pre element in HTML
    expect(preElement).not.toBe(null);
  });

  it("Checking simple oneliner (checking for length)", async () => {

    // Parse code
    const template: ShikiParams = {
      language: "typescript",
      code: "import {JSDOM} from \"jsdom\""
    };
    const code = await useShiki(template);

    // Parse HTML
    const parser = new JSDOM(code);
    const preElement =
      parser.window.document.body
        .querySelector("pre");

    // Get first line of code
    const htmlLineOfCodes = preElement?.querySelectorAll(LINE_OF_CODE_CLASS);

    expect(htmlLineOfCodes).toHaveLength(1);
  });

  it("Checking simple oneliner (checking for content)", async () => {

    // Parse code
    const rawCode = "import { JSDOM } from \"jsdom\";";
    const template: ShikiParams = {
      language: "typescript",
      code: rawCode
    };
    const code = await useShiki(template);

    // Parse HTML
    const parser = new JSDOM(code);
    const preElement =
      parser.window.document.body
        .querySelector("pre");
    const firstLineOfCode = preElement?.querySelector(LINE_OF_CODE_CLASS);

    // Check for first line of code content
    expect(firstLineOfCode?.textContent).toBe(rawCode);
  });
});