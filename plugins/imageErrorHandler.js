export default ({ app }, inject) => {
  const handleImageError = (event) => {
    const img = event.target
    let currentSrc = img.src

    console.log('图片加载失败:', currentSrc)

    // 检查是否已经尝试过所有格式
    if (img.dataset.triedAllFormats === 'true') {
      console.log('所有格式都已尝试，移除图片')
      safeRemoveImage(img)
      return
    }

    const jpgSrc = currentSrc.replace(/\.[^/.]+$/, '.jpg')
    const pngSrc = currentSrc.replace(/\.[^/.]+$/, '.png')

    if (currentSrc.endsWith('.jpg')) {
      // 如果当前是jpg，尝试png
      img.src = pngSrc
      img.dataset.triedAllFormats = 'true'
    } else {
      // 其他情况，先尝试jpg
      img.src = jpgSrc
      img.onerror = handleImageError
    }
  }

  // 安全移除图片的函数
  const safeRemoveImage = (img) => {
    if (img && img.parentNode) {
      img.parentNode.removeChild(img)
    }
  }

  inject('handleImageError', handleImageError)
}
