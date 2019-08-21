export async function Sleep(ms: number) {
  await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() =>
    console.log("next")
  );
}
