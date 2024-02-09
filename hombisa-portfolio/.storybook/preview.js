/* @type {import('@storybook/react').Preview}*/
const Preview = {
    parameters:{
        actions: { argTypesRegex: "^on[A-Z].*"},
            controls: {
                metchers: {
                    color: /(background|color)$/i,
                    date: /Dates/,
                },
            },
     },
};

export const decorators = [(story, context)=> <story key={JSON.stringify(context.args)} />];

export default Preview;