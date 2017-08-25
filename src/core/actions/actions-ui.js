import constants from '../types'

/**
 * openDrawer - Open the side nav
 */
export function openDrawer() {
  return {
    type: constants.OPEN_DRAWER
  }
}

/**
 * closeDrawer - Close the side nav
 */
export function closeDrawer() {
  return {
    type: constants.CLOSE_DRAWER
  }
}
