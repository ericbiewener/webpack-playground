export const fooDynamic = async () => {
  const { foo } = await import("./foo.js");
  foo();
}
