export function bold() {
  document.execCommand("bold", false, null);
}

export function italic() {
  document.execCommand("italic", false, null);
}

export function title() {
  document.execCommand("formatBlock", false, "h1");
}

export function blockquote() {
  document.execCommand("formatBlock", false, "blockquote");
}

export function unorderedList() {
  document.execCommand("insertUnorderedList", false, null);
}

export function orderedList() {
  document.execCommand("insertOrderedList", false, null);
}

export function justifyLeft() {
  document.execCommand("justifyLeft", false, null);
}
export function justifyCenter() {
  document.execCommand("justifyCenter", false, null);
}
export function justifyRight() {
  document.execCommand("justifyRight", false, null);
}
export function justifyFull() {
  document.execCommand("justifyFull", false, null);
}
