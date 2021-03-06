const platform = location.host.split('.')[0];
const ideWebsitesList = [
  {
    title: 'CodeSandbox',
    baseurl: `https://codesandbox.io/s/${platform}`,
    platforms: ['github'],
    type: 'url',
    icon: '<svg width="16" height="16" viewBox="0 0 222 252" fill="none" class="mr-2" style="vertical-align:sub"><path d="M7.21906 55.4205L104.143 2.63078C109.425 -0.246393 115.823 -0.172544 121.038 2.8258L214.465 56.5439C218.759 59.0125 221.405 63.5875 221.405 68.5401V182.652C221.405 187.615 218.747 192.199 214.438 194.663L117.637 250.034C113.346 252.488 108.072 252.467 103.8 249.979L6.87245 193.515C2.61721 191.036 0 186.483 0 181.558V67.5728C0 62.5058 2.76932 57.8441 7.21906 55.4205Z" fill="var(--color-text-primary)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M110.695 126.451V235.33C112.591 235.33 113.837 234.919 115.539 233.947L202.722 184.128C206.163 182.156 207.567 179.101 207.567 175.133V74.1121C207.567 72.1218 207.148 70.931 206.181 69.2687L113.484 121.645C111.76 122.63 110.695 124.465 110.695 126.451ZM159.13 188.972C159.13 191.739 158.093 193.123 155.67 194.507L126.609 211.113C124.534 212.496 121.766 211.805 121.766 209.037V135.001C121.766 133.021 123.509 130.454 125.225 129.466L191.651 91.4103C193.496 90.3484 195.11 92.0491 195.11 94.178V133.618C195.11 135.662 194.146 137.499 192.342 138.461L162.59 154.375C160.786 155.337 159.13 157.174 159.13 159.219V188.972Z" fill="#999999"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.8252 175.131V74.1108C13.8252 70.138 15.9113 66.395 19.3606 64.4238L103.775 16.6811C105.594 15.7173 108.618 15.2973 110.695 15.2973C112.771 15.2973 115.973 15.8114 117.614 16.6811L201.337 64.4238C202.993 65.4026 205.243 67.6571 206.18 69.2674L113.462 121.854C111.738 122.839 110.695 124.711 110.695 126.697V235.329C108.799 235.329 106.861 234.917 105.159 233.945L20.0525 184.819C16.6031 182.847 13.8252 179.104 13.8252 175.131ZM26.2798 94.1766V133.616C26.2798 136.384 26.9718 137.768 29.7395 139.152L58.8003 155.758C61.5679 157.142 62.2599 159.217 62.2599 161.293V188.97C62.2599 191.737 62.9518 193.121 65.7195 194.506L94.7803 211.112C97.5477 212.496 99.6238 211.804 99.6238 209.036V135.001C99.6238 132.924 98.9318 130.848 96.1646 129.465L31.1233 92.1008C29.0475 90.717 26.2798 91.4089 26.2798 94.1766ZM139.756 47.1258L114.154 61.6561C112.079 63.04 109.311 63.04 107.235 61.6561L81.6337 47.1258C79.9485 46.1733 77.7863 46.1781 76.0983 47.1258L44.2699 65.1158C41.5022 66.4997 41.5022 69.2674 44.2699 70.6512L107.926 107.323C109.63 108.298 111.759 108.298 113.462 107.323L177.119 70.6512C179.195 69.2674 179.887 66.4997 177.119 65.1158L145.291 47.1258C143.603 46.1781 141.441 46.1733 139.756 47.1258Z" fill="#F2F2F2"></path></svg>'
  },
  {
    title: 'GitHub1s',
    baseurl: 'https://github1s.com',
    platforms: ['github'],
    type: 'url',
    icon: '<img id="show-img" class="mr-2" width="16" style="vertical-align:sub" src="data:image/png;base64,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"/>'
  },
  {
    title: 'GitlabSurf',
    baseurl: 'https://gitlab.surf',
    platforms: ['gitlab'],
    type: 'repoName',
    icon: '<img id="show-img" class="mr-2" width="16" style="vertical-align:sub" src="data:image/png;base64,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"/>'
  },
  {
    title: 'Repl.it',
    baseurl: `https://repl.it/${platform}`,
    platforms: ['github'],
    type: 'repoName',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 900 900" class="mr-2" style="vertical-align:sub"><g fill-rule="nonzero" stroke="none" stroke-width="1"><path fill="var(--color-text-primary)" d="M895.5 408.05c1.23 13.58 2.08 27.28 2.08 41.19 0-13.91-.85-27.6-2.08-41.19z"></path><path fill="var(--color-text-primary)" d="M230 405.68S105.25 865.32 605.26 869.32c156.88-58.4 272.48-201.58 290-374.2 1.21-11.94 1.57-24.12 1.84-36.32.05-3.21.48-6.33.48-9.56 0-13.9-.85-27.61-2.08-41.19C763.4 928.08 179 724.39 230 405.68z"></path><path fill="var(--color-text-primary)" d="M488.54 235.07S23 105.06 30.16 612.68a449.86 449.86 0 00108.49 162.17c2 1.89 4.07 3.68 6.09 5.54a450.17 450.17 0 0042.54 34.67c2.31 1.65 4.48 3.47 6.8 5.08a446.74 446.74 0 0049.11 29.16c4.93 2.54 10 4.86 15 7.23a443.91 443.91 0 0044.85 18.2c3.75 1.28 7.33 2.88 11.13 4.07A444.68 444.68 0 00370 892c5.71 1 11.48 1.84 17.26 2.64a450 450 0 0059.11 4.59c.76 0 1.49.12 2.25.12 14.92 0 29.65-.8 44.18-2.23-522.34-124.57-323.8-708.65-4.26-662.05z"></path><path fill="var(--color-text-primary)" d="M670 475.8S780.14 11.46 284.36 32.2C118.11 97.87.42 259.63.42 449.2a451.1 451.1 0 004.61 61C109.37-15.14 703.8 155 670 475.8z"></path><path fill="var(--color-text-primary)" d="M431.95 675.62S898.3 736.5 869.11 293.11C805.64 122.44 641.76.62 449 .62a450.24 450.24 0 00-81.35 7.73c519.64 63.79 384.58 671.81 64.3 667.27z"></path><path fill="var(--color-text-primary)" d="M578.46 449.25c0 50.824-30.618 96.643-77.575 116.09-46.957 19.445-101.005 8.688-136.937-27.256-35.933-35.944-46.673-89.995-27.212-136.946 19.46-46.95 65.29-77.554 116.114-77.538 69.381.017 125.616 56.269 125.61 125.65z"></path></g></svg>'
  },
  // {
  //   title: 'StackBlitz',
  //   baseurl: `https://stackblitz.com/${platform}`,
  //   platforms: ['github'],
  //   type: 'repoName',
  //   icon: '<svg width="16" height="16" viewBox="0 0 25 33" class="mr-2" style="vertical-align:sub"><path fill="var(--color-text-primary)" fill-rule="nonzero" stroke="none" stroke-width="1" d="M0 19.9187087L9.87007874 19.9187087 4.12007874 34 23 13.9612393 13.0846457 13.9612393 18.7893701 0z"></path></svg>'
  // },
  {
    title: 'Gitpod',
    baseurl: `https://gitpod.io/#https://${platform}.com`,
    platforms: ['github', 'gitlab'],
    type: 'url',
    icon: '<svg width="16" height="16" viewBox="0 0 32 32" class="mr-2" style="vertical-align:sub"><path fill="var(--color-text-primary)" d="M4.802 22.667v-12.531l-2.802-1.604v15.734l13.599 7.734v-3.198zM15.599 25.599v-9.198l-8-4.667v9.333zM16 3.198l10.802 6.271 2.797-1.604-13.599-7.865-13.599 7.865 2.797 1.604zM24 11.068l-8-4.667-8 4.667 8 4.667zM16.401 25.734l8-4.667v-3.203l-5.469 3.203v-3.203l8.266-4.797v9.599l-10.797 6.135v3.198l13.599-7.734v-15.734l-13.599 7.87z"></path></svg>'
  },
  {
    title: 'Glitch',
    baseurl: `https://glitch.com/edit/#!/import/github`,
    platforms: ['github'],
    type: 'repoName',
    icon: `<svg width="16" height="16" viewBox="0 0 614.93 478.48" class="mr-2" style="vertical-align:sub"><path d="M243,242.33V224.71H461.72v3.42c-28,9.12-69.46,17.72-80.1,19.38,5.8,2.7,7.69,5.08,10.16,5.89a208.75,208.75,0,0,1,25.42,4.68c16.47,3.79,30.11,7.38,41.33,11.34,11.66,4.36,17.83,6.37,24.7,8.35a246,246,0,0,0,24.36,5.33c6.77,1,21.16-4,24.54-4.87s47.15-17.88,47.15-17.88,19-7.11,26.52-9c6.91-1.91,7.09.4,7.09.4a47.43,47.43,0,0,1,1.48,6.11,100.59,100.59,0,0,1,.18,19.59,149.43,149.43,0,0,1-3,14.93A65.07,65.07,0,0,1,607,304.16c-1.4,2.45-3.56,6.27-4.3,7.93a22,22,0,0,0-2.18,7.29,35.09,35.09,0,0,0,.49,10.29c.6,2.9,2.54,10.17,2.54,10.17l2.29,9.09-313.46-.38,0,18.38H38.53a2.51,2.51,0,0,0,.07-1.31c-.26-1.12-1.54-2.77-6.44-5.72-6.31-4.11-26.23-11.32-32-13.43C-.07,341-2.44,315.8,29,288.15a297.4,297.4,0,0,1,29.66-22.3s27-17.66,48.46-24.71" fill="var(--color-text-primary)" style="isolation:isolate"/><path d="M605.79,348.93l-313.46-.38,0,18.38H38.53c-1.41,4.14-20.46,11.46-33.5,14,7,9.63,20.22,18.42,33.49,26a304.23,304.23,0,0,0,39.72,18.11c5,1.73,19.9,7.56,28.78,8.26a206.19,206.19,0,0,0,37.08-.7,173.16,173.16,0,0,0,19.37-3s1.24,4.9,9,15.66c5.61,7.45,12.49,15.07,19.36,19.58,8.18,5.17,10.9,7.9,28.62,11.13a141.64,141.64,0,0,0,40,1.86c9-.83,17.72-1.12,25.47-3.27.37-9.94-.88-19.12-4.88-27.23,10.76.43,16.74.74,31.76.45,29-.55,60.67-6.52,86.63-11.48,21.45-4.09,56.54-13.92,73.32-19.5,9.64-3.21,32.56-11,34.69-11,3.45,0,8.63.81,15.84,2.94,10.71,3.17,18.94,6,37,12.49s34.13,12.15,43.91,13.49c7.23,1,8.12,0,8.62-3.62.83-4.58-5.55-15-8.18-23.18a43.14,43.14,0,0,1-1.89-26,70.16,70.16,0,0,1,2.46-7.5,41,41,0,0,0,2.24-15.55A48,48,0,0,0,605.79,348.93Z" fill="var(--color-text-secondary)"/><path d="M601.7,198.75a33,33,0,0,1,1.3-10.19c.62-2,1.26-3.78,2.44-7.15a40.44,40.44,0,0,0,1.89-15.93,82,82,0,0,0-1.57-9.49l-229.88-.39v17.9H38.68c.68,4.91-20.5,12.76-33.54,15.34C11.94,198.18,25.69,207.39,39,215a311.06,311.06,0,0,0,39.78,18.11c6,2.12,19.12,7,28.4,8.07L243,242.33V224.71H461.72v3.42c3.3-.92,8.2-2.38,11.35-3.42,9.64-3.21,32.94-11.23,35.07-11.26,3.46,0,7.87.76,15.08,2.89,10.71,3.16,19.23,6.33,37.31,12.78s33.77,12,43.53,13.44c8.39,1.25,8.89-1.56,8.89-4.91.2-4.27-6.12-15.06-8.76-23.28A50.64,50.64,0,0,1,601.7,198.75Z" fill="var(--color-text-secondary)"/><path d="M614.37,65.91c.18,3.26.68,16.56.18,19.58a113.94,113.94,0,0,1-2.8,13.69c-1.3,4.1-3.28,10-4.8,12.68-1.4,2.45-3.68,6.23-4.42,7.89a24.77,24.77,0,0,0-2.06,7.69,35.09,35.09,0,0,0,.49,10.29c.6,2.9,2.54,10.17,2.54,10.17l2.26,8.09-229.88-.39v17.9H38.68s.3-2-5.8-5.8c-5.5-3-23.4-10.6-32.5-13.4C-.5,149.73-2.44,123.85,29,96.21A295.82,295.82,0,0,1,58.68,73.9s26.08-18.51,54.1-26.8a142.37,142.37,0,0,1,20.6-4.2c19.87-1.62,51.72-2.4,54.84-2.29A231.72,231.72,0,0,1,208.58,17C220.45,5.31,227.18.8,234.28,0c9.8.58,62.26,12.84,77.07,17.25,8.5,2.4,25.52,7,39,12.65,13.9,5.34,17.28,9.88,17.28,9.88a124.57,124.57,0,0,0,8.46,11.33c3.28,3.28,12.7,8.94,15.32,10,3.95,1,10.63,1.06,25.75,4.71,15.8,3.76,30,7.78,41.3,11.3,11.7,3.9,17.8,6.6,24.8,8.4s18.2,4.5,24.4,5.4,19.83-4,23.21-4.87S579.28,68.4,579.28,68.4s24.3-8.69,26.5-9.4C613.15,56.6,614.37,56.43,614.37,65.91Z" fill="var(--color-text-primary)" style="isolation:isolate"/><path d="M107,93.51c-15.9,0-27.9,12.2-28.7,29.5-.8,17.1,12.9,29.5,28.7,29.5s28.7-13.2,28.7-29.5S122.91,93.51,107,93.51Zm-6.7,52.8c-12.2,0-22.1-8.7-22-22.7.4-11.5,9.9-22.7,22-22.7s22,10.1,22,22.7S112.51,146.31,100.31,146.31Z" fill="#fff"/><path d="M100.31,101c-12.2,0-21.7,11.2-22,22.7,0,14,9.9,22.7,22,22.7s22-10.1,22-22.7S112.51,101,100.31,101Zm-10.4,37.8a7.4,7.4,0,1,1,7.2-7.4A7.28,7.28,0,0,1,89.91,138.81Z"/><ellipse cx="89.91" cy="131.41" rx="7.2" ry="7.4" fill="#fff"/><path d="M107,287.09c-15.9,0-27.9,12.2-28.7,29.5-.8,17.1,12.9,29.5,28.7,29.5s28.7-13.2,28.7-29.5S122.91,287.09,107,287.09Zm-6.7,52.8c-12.2,0-22.1-8.7-22-22.7.4-11.5,9.9-22.7,22-22.7s22,10.1,22,22.7S112.51,339.89,100.31,339.89Z" fill="#fff"/><path d="M100.31,294.59c-12.2,0-21.7,11.2-22,22.7,0,14,9.9,22.7,22,22.7s22-10.1,22-22.7S112.51,294.59,100.31,294.59Zm-10.4,37.8a7.4,7.4,0,1,1,7.2-7.4A7.28,7.28,0,0,1,89.91,332.39Z"/><ellipse cx="89.91" cy="324.99" rx="7.2" ry="7.4" fill="#fff"/><path d="M224.46,173.5c-4.11,15.43-8.38,28.13-8.46,28.36a7,7,0,0,0,13.27,4.49c.34-1,5.26-15.65,9.68-32.85Z" fill="#ccc"/><path d="M192.24,173.5c-1.28,2.89-2.2,4.66-2.25,4.76a6,6,0,0,0,10.6,5.61,113.2,113.2,0,0,0,4.68-10.37Z" fill="#ccc"/><path d="M231.9,135.15c0,.21-.06.41-.08.62-.8,10.93-4,25.23-7.36,37.73H239c3.12-12.14,6-25.57,6.81-36.42,1.78-12.09-5.61-34.81-10.5-48.08a1196.75,1196.75,0,0,1,125.12,11.37c71.07,10.28,156.8,52.88,157.66,53.31a7,7,0,1,0,6.26-12.52c-3.58-1.8-88.58-44-161.91-54.65-76-11-136.79-11.78-137.39-11.78a7,7,0,0,0-6.55,9.67C224.48,99,233.46,125.62,231.9,135.15Z" fill="#ccc"/><path d="M200.57,136.58c1.17,13.32-4.88,29.16-8.33,36.92h13c3.84-9.64,8.44-24.47,7.25-38a111.21,111.21,0,0,0-17.8-50.8,6,6,0,0,0-9.76,7A100.88,100.88,0,0,1,200.57,136.58Z" fill="#ccc"/><path d="M224.59,366.89c-4.11,15.43-8.38,28.13-8.46,28.36a7,7,0,0,0,13.26,4.49c.35-1,5.27-15.65,9.68-32.85Z" fill="#ccc"/><path d="M192.37,366.89c-1.29,2.89-2.21,4.66-2.26,4.76a6,6,0,0,0,10.61,5.61,113.2,113.2,0,0,0,4.68-10.37Z" fill="#ccc"/><path d="M232,328.54a6.18,6.18,0,0,0-.07.62c-.81,10.93-4,25.23-7.36,37.73h14.48c3.12-12.14,6-25.57,6.82-36.42,1.78-12.09-5.61-34.81-10.51-48.08a1196.87,1196.87,0,0,1,125.13,11.37c71.06,10.28,156.8,52.88,157.65,53.31a7,7,0,1,0,6.27-12.52c-3.58-1.8-88.58-44-161.92-54.65a1167.85,1167.85,0,0,0-137.39-11.79,7,7,0,0,0-6.54,9.68C224.61,292.35,233.59,319,232,328.54Z" fill="#ccc"/><path d="M200.69,330c1.18,13.32-4.88,29.16-8.32,36.92h13c3.83-9.64,8.44-24.47,7.25-38a111.21,111.21,0,0,0-17.8-50.8,6,6,0,0,0-9.76,7A100.94,100.94,0,0,1,200.69,330Z" fill="#ccc"/></svg>`
  },
  {
    title: 'Sourcegraph',
    baseurl: `https://sourcegraph.com/${platform}.com`,
    platforms: ['github', 'gitlab'],
    type: 'repoName',
    icon: '<svg width="16" height="16" viewBox="0 0 65 64" class="mr-2" style="vertical-align:sub"><path d="M19.5809 8.42498L33.4692 59.2756C34.4044 62.6921 37.9254 64.7045 41.3365 63.772C44.7477 62.8342 46.7547 59.3051 45.8222 55.8886L31.9312 5.03529C30.996 1.61881 27.475 -0.393568 24.0639 0.541611C20.6554 1.47679 18.6457 5.00582 19.5809 8.42498Z" fill="var(--color-text-primary)"></path><path d="M45.2995 8.23211L10.5184 47.5659C8.17375 50.2187 8.41759 54.2756 11.065 56.6256C13.7125 58.9756 17.7587 58.7291 20.1033 56.0763L54.8845 16.7425C57.2291 14.0897 56.9853 10.0355 54.3378 7.68548C51.6904 5.33547 47.6469 5.57931 45.2995 8.23211Z" fill="var(--color-text-primary)"></path><path d="M5.89199 30.0308L55.494 46.4621C58.8515 47.5768 62.4716 45.7493 63.5837 42.3864C64.6957 39.0208 62.8709 35.3927 59.516 34.2833L9.91138 17.844C6.55385 16.7346 2.93372 18.5568 1.82437 21.9223C0.712335 25.2879 2.53446 28.9161 5.89199 30.0308Z" fill="var(--color-text-primary)"></path></svg>'
  }
];
const vsCodeItem = {
  title: 'Clone in VSCode',
  baseurl: `vscode://vscode.git/clone?url=https://${platform}.com`,
  icon: '<svg width="16" height="16" viewBox="0 0 276 276" class="mr-2" style="vertical-align:sub"><g><path d="M246.94 27.6383L194.193 2.24138C188.088 -0.698302 180.791 0.541721 175.999 5.33332L3.32371 162.773C-1.32082 167.008 -1.31548 174.32 3.33523 178.548L17.4399 191.37C21.2421 194.827 26.9682 195.081 31.0619 191.976L239.003 34.2269C245.979 28.9347 255.999 33.9103 255.999 42.6667V42.0543C255.999 35.9078 252.478 30.3047 246.94 27.6383Z" fill="var(--color-text-primary)"/><g><path d="M246.94 228.362L194.193 253.759C188.088 256.698 180.791 255.458 175.999 250.667L3.32371 93.2272C-1.32082 88.9925 -1.31548 81.6802 3.33523 77.4523L17.4399 64.6298C21.2421 61.1733 26.9682 60.9188 31.0619 64.0245L239.003 221.773C245.979 227.065 255.999 222.09 255.999 213.333V213.946C255.999 220.092 252.478 225.695 246.94 228.362Z" fill="var(--color-text-primary)"/></g><g><path d="M194.196 253.763C188.089 256.7 180.792 255.459 176 250.667C181.904 256.571 192 252.389 192 244.039V11.9606C192 3.61057 181.904 -0.571175 176 5.33321C180.792 0.541166 188.089 -0.700607 194.196 2.23648L246.934 27.5985C252.476 30.2635 256 35.8686 256 42.0178V213.983C256 220.132 252.476 225.737 246.934 228.402L194.196 253.763Z" fill="var(--color-text-primary)"/></g></g></svg>'
};

const repoUrlPath = '/' + location.pathname.split('/').slice(1, 3).join('/');
// const hasPackageJson = [...document.querySelectorAll('.Details > .js-active-navigation-container > .Box-row')].find((el) => el.querySelector('a.js-navigation-open').innerText === 'package.json');

switch (platform) {
  case 'github':
    addGithubSelectMenu();
    document.addEventListener('pjax:end', () => {
      document.getElementById('open-in-web-ide')?.remove();
      addGithubSelectMenu();
    });
    break;
  case 'gitlab':
    addGitlabSelectMenu();
    localStorage.setItem('gl-web-ide-button-selected', 'webide');
    break;
  default:
    break;
}

function addGithubSelectMenu () {
  const menuElement = document.querySelector('#repo-content-pjax-container .file-navigation');
  if (!menuElement || menuElement.querySelector('#open-in-web-ide')) {
    return;
  }

  const githubHtml = `<summary role="button" type="button" class="btn ml-2">
    <span class="d-none d-md-flex flex-items-center">
      Open In Web IDE
      <span class="dropdown-caret ml-1"></span>
    </span>
    <span class="d-inline-block d-md-none">IDE</span>
  </summary>
  <div>
    <ul class="dropdown-menu dropdown-menu-sw">
      ${ideWebsitesList.filter((item) => item.platforms.includes(platform)).map((item) =>
    /* item.title === 'StackBlitz' && !hasPackageJson) ? '' : */
    `<li data-toggle-for="open-in-web-ide"><a href="${item.baseurl}${item.type === 'repoName' ? repoUrlPath : location.pathname.replace(/\/tree\/master$/, '')}" class="dropdown-item" target="_blank" rel="noopener noreferrer">
        ${item.icon}
        ${item.title}
      </a></li>`).join('')}
      <li class="border-top d-none d-md-flex" data-toggle-for="open-in-web-ide"><a href="${vsCodeItem.baseurl}${repoUrlPath}.git" class="dropdown-item" rel="noopener noreferrer">
        ${vsCodeItem.icon}
        ${vsCodeItem.title}
      </a></li>
    </ul>
  </div> `;

  const detailsElement = document.createElement('details');
  detailsElement.setAttribute('class', 'details-overlay details-reset position-relative d-block');
  detailsElement.setAttribute('id', 'open-in-web-ide');
  detailsElement.innerHTML = githubHtml;

  // Fix Commits page style
  fixCommitsPageStyle(menuElement);

  menuElement.appendChild(detailsElement);
}

function addGitlabSelectMenu () {
  const webIDEDropdown = document.querySelector('.tree-controls .gl-new-dropdown .dropdown-menu .gl-new-dropdown-contents');
  if (!webIDEDropdown || document.querySelector('#open-in-web-ide')) {
    return;
  }

  const gitlabHtml = `${ideWebsitesList.filter((item) => item.platforms.includes(platform)).map((item) =>
    `<li data-toggle-for="open-in-web-ide"><a href="${item.baseurl}${item.type === 'repoName' ? repoUrlPath : location.pathname}" class="dropdown-item" target="_blank">
      ${item.icon}
      ${item.title}
    </a></li>`).join('')}`;

  webIDEDropdown.setAttribute('id', '#open-in-web-ide');
  webIDEDropdown.innerHTML = gitlabHtml;
}

function fixCommitsPageStyle (menuElement) {
  const commitsPageNavigator = document.querySelector('#repo-content-pjax-container > .file-navigation');
  if (commitsPageNavigator) {
    commitsPageNavigator.classList.add('d-flex');
    const divFlexElement = document.createElement('div');
    divFlexElement.setAttribute('class', 'flex-auto');
    menuElement.appendChild(divFlexElement);
  }
}
