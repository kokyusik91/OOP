
// Error Handling :  

{
  const readFile = (fileName: string): string => {
    if (fileName === 'not existed') {
      throw new Error("file does not existed")
    }

    return `${fileName} π`
  }

  const closeFile = () : void => {
    console.log(`file is closed!!`)
  }
  

  function run() {
    const file = "not existed"
    try {
    /**
     * μλ¬ λ°μν κ΅¬κ°
     */
    const currentfile = readFile(file);
    console.log(currentfile)
  } catch(error) {
      console.log("catched!!!")
      // return λ¬Έμ μ°λλΌλ, λ°μ finally λ¬Έμ μ€νμ΄ λλ€.
      return
  } finally {
    closeFile()
    }
  }

  run()
}