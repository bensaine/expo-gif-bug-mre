Bug in expo-image
GIFs below a certain size will not animate on IOS, even if animation is started explicitly. See very simple repro. This 'cutoff' size seems to vary from GIF to GIF, but is a very problematic bug.

- Run `npx create-expo-app`
- Run `npx expo install expo-image`
- Add an `Image` with a GIF as source with a small width & height.
