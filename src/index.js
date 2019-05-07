import './css/fromjs.sass'

// I know this is dumb
// Just for demo purpose
async function asyncAwaitSample() {
  const { tes } = await import('./tes');
  const result = await tes();
  console.log(result);
}

asyncAwaitSample();