import * as htmlToImage from 'html-to-image'

const cardElement = document.querySelector<HTMLDivElement>('[data-card]')!
const saveElement = document.querySelector<HTMLButtonElement>('[data-save]')!

async function saveImage(node: HTMLElement) {
  try {
    const options = { width: 1200, height: 630 }
    const dataUrl = await htmlToImage.toPng(node, options)

    const linkElement = document.createElement('a')
    linkElement.download = 'og-image.png'
    linkElement.href = dataUrl
    linkElement.click()
  } catch (error) {
    throw new Error(`Something went wrong: ${error}`)
  }
}

saveElement.addEventListener('click', () => saveImage(cardElement))
