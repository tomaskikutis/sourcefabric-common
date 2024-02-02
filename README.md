### Storybook notes

Type inference doesn't work well with generics in `Story.args`. Instead, define your own IProps and use `args: props as unknown as any`.
