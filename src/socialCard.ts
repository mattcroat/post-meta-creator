import * as htmlToImage from 'html-to-image'
import imageCompression from 'browser-image-compression'

const cardElement = document.querySelector<HTMLDivElement>('[data-card]')!
const saveElement = document.querySelector<HTMLButtonElement>('[data-save]')!

async function saveImage(node: HTMLElement) {
  try {
    const options = { width: 1200, height: 630 }
    const imageBlob = (await htmlToImage.toBlob(node, options)) as File

    const compressedFile = await imageCompression(imageBlob, {
      initialQuality: 1,
    })
    const imageUrl = URL.createObjectURL(compressedFile)

    const linkElement = document.createElement('a')
    linkElement.download = 'og-image.png'
    linkElement.href = imageUrl
    linkElement.click()
  } catch (error) {
    throw new Error(`Something went wrong: ${error}`)
  }
}

saveElement.addEventListener('click', () => saveImage(cardElement))
