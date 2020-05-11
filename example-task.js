import { Selector } from "testcafe";

fixture`First test`.page`https://github.com/`;

test("My first test", async (t) => {
  await t
    .typeText(".header-search-input", "nuxt.js")
    .pressKey("enter")
    .expect(Selector("em").innerText)
    .eql("nuxt.js");
});

test("My second test", async (t) => {
  await t
    .typeText(".header-search-input", "vue")
    .pressKey("enter")
    .expect(Selector("em").innerText)
    .eql("vue");
});

test.page`https://github.com/nuxt/nuxt.js`("My third test", async (t) => {
  const vueExists = Selector(".topic-tag").withText("vue").exists;
  const ssrExists = Selector(".topic-tag").withText("ssr").exists;
  const serverRenderingExists = Selector(".topic-tag").withText(
    "server-rendering"
  ).exists;

  await t
    .expect(vueExists)
    .ok()
    .expect(ssrExists)
    .ok()
    .expect(serverRenderingExists)
    .ok();
});
