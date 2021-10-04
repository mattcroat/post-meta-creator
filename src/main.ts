import * as htmlToImage from 'html-to-image'

const nodeElement = document.querySelector<HTMLDivElement>('[card-node')!
const saveElement = document.querySelector<HTMLButtonElement>('[card-save]')!

async function saveImage(node: HTMLElement) {
  try {
    const options = { width: 1200, height: 630 }
    const dataUrl = await htmlToImage.toPng(node, options)

    const linkEl = document.createElement('a')
    linkEl.download = 'og-image.png'
    linkEl.href = dataUrl
    linkEl.click()
  } catch (error) {
    throw new Error(`Something went wrong: ${error}`)
  }
}

saveElement.addEventListener('click', () => saveImage(nodeElement))
