export const isListBullet = (text) => text?.trim().startsWith('•')

export const normalizeBullet = (text) => text.replace(/^[\s\u00A0]*•\s*/u, '')

export const buildDescriptionBlocks = (description = []) =>
  description.reduce((blocks, paragraph) => {
    if (isListBullet(paragraph)) {
      if (!blocks.length || blocks[blocks.length - 1].type !== 'list') {
        blocks.push({ type: 'list', items: [normalizeBullet(paragraph)] })
      } else {
        blocks[blocks.length - 1].items.push(normalizeBullet(paragraph))
      }
    } else {
      blocks.push({ type: 'paragraph', text: paragraph })
    }
    return blocks
  }, [])
