# windy-pdf

Use tailwind in react-pdf with the `className` attribute.


To use, just change the import of your components from `@react-pdf/renderer` to
`windy-pdf`. And use the `className` prop as usual.

This will use a default tailwind config. If you want to use a custom one, you
can pass it to the setup function before using the components.


## Complete example

```js
import React from 'react';
import { Page, Text, View, Document, setup } from "windy-pdf";

import config from "../tailwind.config";

setup(config.default);

// Example from https://react-pdf.org/ implemented with tailwind

// Create Document Component
const MyDocument = () => (
<Document>
    <Page size="A4" className="flex flex-row bg-[#E4E4E4]">
        <View className="m-2 p-2 grow">
            <Text>Section #1</Text>
        </View>
        <View className="m-2 p-2 grow">
            <Text>Section #2</Text>
        </View>
    </Page>
</Document>
);
```
