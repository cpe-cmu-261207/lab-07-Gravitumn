import {Store} from 'pullstate'

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][] 
  current: string
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push('#FFFFFF')
    }
  }
  return output
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  current: '#000000'
})

export const colorChange = (color:string) => {
  PixelPainterStore.update(
    s=> {s.current = color}
  )
}

export const CanvasUpdate = (x:number,y:number) => {
  PixelPainterStore.update(
    s =>{
      s.canvas[y][x] = s.current
    }
  )
}

export const clearCanvas = () =>{
  PixelPainterStore.update(
    s => {
      s.canvas = createEmptyCanvas()
    }
  )
}

export const RandomCanvas = () =>{
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      let randnum = Math.floor(Math.random() * 12)+1;
      if(randnum === 1)
        output[i].push('#000000')
      else if(randnum === 2)
        output[i].push('#804000')
      else if(randnum === 3)
        output[i].push('#FE0000')
      else if(randnum === 4)
        output[i].push('#FE6A00')
      else if(randnum === 5)
        output[i].push('#FFD800')
      else if(randnum === 6)
        output[i].push('#FFFFFF')
      else if(randnum === 7)
        output[i].push('#01FFFF')
      else if(randnum === 8)
        output[i].push('#0094FE')
      else if(randnum === 9)
        output[i].push('#0026FF')
      else if(randnum === 10)
        output[i].push('#B100FE')
      else if(randnum === 11)
        output[i].push('#FF006E')
      else if(randnum === 12)
        output[i].push('#00FF01')
    }
  }

  PixelPainterStore.update(
    s=>{
      s.canvas = output
    }
  )
}