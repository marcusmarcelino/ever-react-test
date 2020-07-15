import copy from 'copy-to-clipboard';

export const CopyText = (e) => copy(e.target.dataset.copy);

export default CopyText;
