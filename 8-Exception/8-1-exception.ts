
// Error Handling :  

{
  const readFile = (fileName: string): string => {
    if (fileName === 'not existed') {
      throw new Error("file does not existed")
    }

    return `${fileName} 😂`
  }

  const closeFile = () : void => {
    console.log(`file is closed!!`)
  }
  

  function run() {
    const file = "not existed"
    try {
    /**
     * 에러 발생한 구간
     */
    const currentfile = readFile(file);
    console.log(currentfile)
  } catch(error) {
      console.log("catched!!!")
      // return 문을 쓰더라도, 밑의 finally 문은 실행이 된다.
      return
  } finally {
    closeFile()
    }
  }

  run()
}