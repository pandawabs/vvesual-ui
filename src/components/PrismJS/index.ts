// components/PrismJS/index.ts
import * as Vue from 'vue';
import Prism from 'prismjs';
import { Slots, VNode } from 'vue';
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/plugins/toolbar/prism-toolbar.css";

declare type Data = Record<string, unknown>;

export default Vue.defineComponent({
  name: "PrismJS",
  props: {
    code: {
      type: String,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    language: {
      type: String,
      default: 'markup',
    },
  },
  setup(props, { slots, attrs }: { slots: Slots; attrs: Data }) {
    const { h } = Vue;
    const slotsData = (slots && slots.default && slots.default()) || [];
    const code = props.code || ((slotsData.length > 0 ? slotsData[0].children : '') as string);
    const { inline, language } = props;
    const prismLanguage = Prism.languages[language];
    const className = `language-${language}`;

    if (inline) {
      return (): VNode =>
        h('code', { ...attrs, class: [attrs.class, className], innerHTML: Prism.highlight(code, prismLanguage, language) });
    }
    else {
      const d = Prism.highlight(code, prismLanguage, language);

      return (): VNode =>
        h('pre', { ...attrs, class: [attrs.class, className] }, [
          h('code', {
            class: className,
            innerHTML: d,
          }),
        ]);
    }
  },
});