<script setup>
import CardLayout from "../layouts/CardLayout.vue";
import CodeSnippetComponent from "../components/CodeSnippetComponent.vue";

const typographyContent = 
`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
<p>
  Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Eros in cursus turpis massa tincidunt dui.
</p>
<code>Code</code>`;
</script>

<template>
  <main>
    <article>
      <h1>📦 Core</h1>
      <section>
        <h2>Typography</h2>
        <CardLayout>
          <div class="flex flex-col gap-2 p-4">
            <div class="mb-4" v-html="typographyContent"></div>
            <div>
              <CodeSnippetComponent language="markup" :code="typographyContent"/>
            </div>
          </div>
        </CardLayout>
      </section>
    </article>
  </main>
</template>

<style scoped></style>
