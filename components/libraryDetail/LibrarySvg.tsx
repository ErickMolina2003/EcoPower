import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const LibrarySvg = (props: any) => (
  <Svg
    width={320}
    height={356}
    viewBox="0 0 320 356"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_176_4414)">
      <Path
        d="M332.874 141.864C332.874 168.368 332.874 213.26 285.075 194.96C274.603 189.535 264.191 182.835 258.776 172.459C254.808 164.855 253.958 156.035 253.764 147.452C253.719 145.555 253.689 143.584 252.869 141.864C250.393 136.691 243.098 136.958 237.326 137.106C222.2 137.521 205.463 129.561 201.689 115.005C199.436 106.319 202.181 97.069 206.313 89.0942C210.445 81.1195 215.964 73.8858 219.843 65.7925C220.544 64.325 221.2 62.7834 221.23 61.1677C221.305 56.4985 216.472 53.4597 212.31 51.3252C199.168 44.5808 185.549 36.2206 179.776 22.6872C175.584 12.8596 175.286 -5.10587 180.029 -17.32C250.542 -9.25631 332.874 -43.7876 332.874 28.43V141.864Z"
        fill="#4F93FF"
      />
      <Path
        d="M104.908 180.789C99.1691 188.39 91.1863 193.947 83.354 199.37C87.3003 206.159 90.9302 213.369 91.8038 221.165C92.6623 228.976 90.2675 237.538 84.0168 242.3C83.9113 242.375 -23.01 313.91 -23.9081 306.59C-63.2199 281.19 -5.51715 175.605 -5.51715 125.42C-5.51715 88.3334 -28.7879 19.0152 -5.51715 -6.34003C2.54101 -2.3595 71.7111 36.3936 76.2749 40.5694C88.5655 51.85 95.8555 69.785 90.6741 85.617C88.7312 91.5652 85.1313 97.0779 84.5439 103.312C84.4234 104.603 84.4536 105.955 84.9958 107.127C85.8393 108.914 87.722 109.951 89.4391 110.957C101.052 117.807 109.818 129.418 112.845 142.516C115.873 155.629 113.011 170.049 104.908 180.789Z"
        fill="#4F93FF"
      />
      <Path
        d="M191.67 54.0904C195.203 67.959 188.567 82.2817 176.102 90.6626L178.371 99.5494C179.088 102.352 177.38 105.193 174.577 105.893L160.965 109.331C158.149 110.045 155.294 108.345 154.59 105.556L152.66 97.9666C135.698 98.2261 120.626 88.3273 116.728 73.0186C112.074 54.752 125.072 35.707 145.776 30.4787C166.48 25.2503 187.041 35.8237 191.696 54.1033L191.67 54.0904Z"
        fill="#EEC32D"
      />
      <Path
        d="M127.276 79.8168C127.236 81.2439 128.006 82.5802 128.931 83.6829C129.609 84.5002 130.392 85.2397 131.265 85.8495C132.23 86.5111 133.299 87.0171 134.407 87.4063C135.62 87.8344 137.08 88.1198 138.084 87.3414C138.736 86.8354 139.049 85.9792 139.023 85.1489C138.997 84.3186 138.71 83.5272 138.332 82.8007C137.38 80.9325 135.92 79.3108 134.16 78.1562C131.891 76.6902 127.393 75.6912 127.276 79.8168Z"
        fill="white"
      />
      <Path
        d="M176.506 104.946C175.802 104.051 175.137 103.13 174.499 102.183C174.472 102.144 174.433 102.105 174.407 102.053C169.675 95.0347 166.259 86.4073 163.677 74.9907C164.512 74.0177 165.281 72.8241 165.946 71.423C168.293 66.519 168.853 61.4464 167.523 57.1392C167.184 56.0494 166.389 54.6742 165.176 54.0774C164.512 53.7531 163.808 53.7142 163.143 53.9607C162.073 54.3629 161.539 55.3748 161.213 56.1013C159.205 60.7199 159.987 65.9871 160.874 70.5667C161.135 71.89 161.396 73.1874 161.682 74.4328C161.004 75.0815 160.235 75.6134 159.362 75.9118C158.97 74.6923 158.527 73.4987 158.058 72.3052C155.933 66.999 153.221 64.0151 149.74 63.1848C148.814 62.9643 148.006 62.9643 147.289 63.1719C145.907 63.587 144.824 64.8584 144.472 66.506C144.016 68.5948 144.759 70.9559 146.441 72.8241C147.927 74.4717 149.935 75.5485 151.695 76.3918C153.612 77.3 155.828 78.1692 158.097 78.0135C160.77 87.043 161.252 96.7342 159.479 105.971C159.309 106.879 159.114 107.788 158.892 108.683L160.665 109.111C160.952 107.904 161.213 106.698 161.422 105.478C163.051 96.2542 162.517 86.6538 159.896 77.6632C160.678 77.3908 161.435 76.9886 162.139 76.4437C164.694 87.3674 168.045 95.7482 172.621 102.65C172.83 102.961 173.038 103.273 173.247 103.571C173.768 104.324 174.303 105.063 174.864 105.79C175.02 105.997 175.176 106.192 175.333 106.399L176.767 105.284C176.676 105.167 176.585 105.05 176.506 104.933V104.946ZM152.491 74.7701C150.809 73.9658 149.075 73.0317 147.81 71.6305C146.519 70.1905 145.933 68.4261 146.272 66.8952C146.48 65.9093 147.093 65.1438 147.836 64.9233C148.136 64.8325 148.475 64.8195 148.879 64.8843C149.023 64.9103 149.179 64.9362 149.336 64.9622C152.191 65.6498 154.498 68.2834 156.389 72.9928C156.819 74.0566 157.21 75.1464 157.562 76.2361C155.841 76.2361 154.068 75.5226 152.504 74.7701H152.491ZM162.686 70.2294C161.839 65.9093 161.096 60.9664 162.908 56.8278C163.195 56.1662 163.495 55.777 163.808 55.6602C163.925 55.6213 164.029 55.6083 164.133 55.6213C164.212 55.6213 164.303 55.6602 164.394 55.6991C164.942 55.9586 165.528 56.7759 165.789 57.6711C166.989 61.5502 166.454 66.1557 164.303 70.6446C163.99 71.2932 163.625 71.9808 163.169 72.6555C162.999 71.8511 162.843 71.0467 162.673 70.2294H162.686Z"
        fill="#0F1127"
      />
      <Path
        d="M183.052 104.051C183.586 106.14 182.322 108.255 180.223 108.787L179.884 108.864L183.091 121.462C183.965 124.9 181.878 128.402 178.41 129.272L168.815 131.698C165.36 132.567 161.839 130.491 160.966 127.04L159.088 119.684L162.257 115.481L157.745 114.456L157.406 114.547C155.307 115.079 153.182 113.807 152.648 111.731C152.113 109.643 153.378 107.528 155.477 106.996L178.267 101.236C180.366 100.704 182.491 101.962 183.026 104.051H183.052Z"
        fill="#4F93FF"
      />
      <Path
        d="M179.896 108.864L161.891 124.874L157.771 114.456L179.896 108.864Z"
        fill="#0F1127"
      />
      <Path
        d="M171.917 41.8175C172.673 42.2326 173.364 42.7256 174.003 43.2965C174.303 43.5559 174.577 43.8284 174.851 44.1138C175.138 44.4122 175.437 44.7106 175.646 45.0609C175.959 45.5668 176.35 46.0209 176.833 46.3582C177.145 46.5787 177.524 46.7085 177.902 46.7733C178.475 46.8771 179.075 46.7993 179.623 46.6047C181.174 46.0339 182.178 43.8803 181.096 42.4013C179.166 39.7547 176.337 36.0443 172.713 36.3167C170.17 36.8746 169.61 40.572 171.904 41.8305L171.917 41.8175Z"
        fill="white"
      />
      <Path
        d="M179.87 53.0914C181.761 56.4126 182.387 60.3566 182.178 64.1448C182.178 64.1837 182.178 64.2227 182.178 64.2616C182.048 68.1536 188.149 68.2834 188.241 64.3913C188.541 59.4614 187.419 54.5055 185.138 50.1205C183.247 46.7215 177.941 49.7053 179.87 53.1044V53.0914Z"
        fill="white"
      />
      <Path
        d="M255.632 361.49C240.078 368.496 214.108 366.98 195.92 366.98C185.777 366.98 160 257.18 132.413 241.427C128.071 234.11 124.512 227.455 122.608 222.512C114.434 201.274 106.05 181.84 121.93 171.993C122.374 171.721 122.83 171.448 123.312 171.189C123.312 171.189 123.352 170.968 123.469 170.566C123.638 169.956 124.003 168.945 124.681 167.647C125.777 165.584 126.507 163.963 129.831 160.992C129.831 160.992 130.275 159.033 130.405 158.319L130.535 157.658C131.018 154.855 132.1 149.381 134.603 142.375C134.629 142.323 135.255 140.234 135.281 140.195C137.68 133.527 141.461 128.402 145.881 127.546C145.92 127.546 145.959 127.533 145.998 127.52C146.207 127.481 146.428 127.455 146.663 127.442C146.663 127.442 147.98 118.037 153.821 113.626C154.812 112.886 155.92 112.289 157.172 111.9C160.496 110.875 163.208 111.459 165.281 112.575C166.52 113.236 167.55 114.093 168.332 114.91C169.701 116.311 170.392 117.596 170.392 117.596C170.392 117.596 170.34 117.012 170.327 116.065C170.327 115.455 170.327 114.702 170.379 113.859C170.418 113.055 170.509 112.173 170.64 111.239C170.861 109.76 171.213 108.177 171.787 106.633C172.178 105.582 172.661 104.557 173.273 103.623C173.573 103.156 173.899 102.715 174.264 102.287C174.316 102.222 174.369 102.157 174.434 102.092C175.464 100.951 176.741 99.9905 178.319 99.3548C180.444 98.4986 183.117 98.2132 186.494 98.797C186.924 98.8748 185.425 100.717 185.868 100.821C185.868 100.821 187.824 99.264 187.85 99.6402C188.019 102.144 188.801 112.186 191.266 122.694C191.266 122.694 191.266 122.707 191.266 122.72C191.266 123.005 189.844 122.616 189.923 122.941C190.014 123.33 191.683 124.471 191.787 124.861C192.856 129.064 194.212 133.28 195.92 137.03C202.83 152.274 205.829 156.166 207.041 169.619C208.254 183.073 200.131 211.472 200.131 211.472L307.126 361.49H255.632Z"
        fill="#F65A2A"
      />
      <Path
        d="M179.336 132.385C179.271 132.191 178.905 131.023 178.241 129.324C176.872 125.86 174.225 120.164 170.314 116.026C169.844 115.52 169.362 115.053 168.853 114.612C167.889 113.768 166.859 113.029 165.763 112.432C164.003 111.472 162.061 110.901 159.961 110.901C157.197 110.901 154.968 111.667 153.169 112.86C146.663 117.206 145.868 127.248 145.855 127.377C145.855 127.416 145.855 127.455 145.855 127.507H145.776C145.646 127.507 145.503 127.507 145.359 127.507C135.111 127.922 129.57 156.269 129.336 157.476C129.257 157.904 129.531 158.306 129.961 158.384C130.392 158.462 130.796 158.189 130.874 157.774C131.604 153.986 133.26 147.279 135.62 141.311C135.646 141.259 135.659 141.207 135.685 141.168C138.227 134.759 141.578 129.233 145.437 129.077C145.555 129.077 145.672 129.077 145.789 129.077C149.844 129.077 153.742 131.905 157.054 135.356C157.093 135.434 157.158 135.525 157.224 135.59C157.263 135.616 157.354 135.706 157.497 135.836C160.679 139.261 163.26 143.179 164.838 145.566C165.229 146.163 165.581 146.682 165.842 147.084C165.894 147.162 165.946 147.253 166.011 147.331C164.173 147.331 162.269 148.278 161.083 149.899C159.831 151.599 159.336 153.908 159.701 156.386C160.144 159.5 161.943 162.38 164.433 164.313C164.929 164.702 165.437 165.039 165.972 165.338C166.089 165.403 166.207 165.468 166.324 165.532C166.689 165.727 167.067 165.896 167.458 166.038C167.784 166.155 168.123 166.272 168.449 166.363C169.244 166.583 169.975 166.7 170.666 166.7C171.461 166.7 172.178 166.544 172.817 166.246C172.582 166.531 172.321 166.791 172.021 167.024C171.226 167.66 170.274 168.049 169.205 168.179C168.527 168.257 167.849 168.309 167.211 168.309C166.859 168.309 166.52 168.309 166.181 168.296C165.998 168.296 165.829 168.27 165.646 168.27C165.151 168.231 164.655 168.192 164.199 168.127C162.035 167.842 160.418 167.297 159.896 167.102L146.676 150.782C146.402 150.444 145.907 150.392 145.568 150.665C145.229 150.937 145.177 151.43 145.45 151.768L150.366 157.839C147.732 155.582 145.203 154.233 143.13 154.142C137.654 153.908 133.299 157.1 129.988 160.058C126.076 163.535 124.655 166.324 124.486 166.843C124.381 167.128 124.473 167.44 124.668 167.634C124.746 167.725 124.851 167.79 124.981 167.829C125.372 167.958 125.789 167.764 125.946 167.388C126.154 167.024 134.603 154.44 143.547 155.569C147.393 156.062 153.586 162.237 161.748 172.94C159.675 172.953 157.576 173.952 156.233 175.652C154.629 177.676 154.134 180.582 154.942 183.228C155.659 185.602 157.419 187.769 159.766 189.17C161.409 190.156 163.182 190.675 164.864 190.675C165.19 190.675 165.529 190.662 165.842 190.61C165.998 190.597 166.141 190.571 166.285 190.545C166.663 190.48 167.028 190.377 167.38 190.247C168.488 189.858 169.466 189.183 170.209 188.34C169.844 189.702 169.01 190.844 167.81 191.583C167.732 191.635 167.641 191.687 167.563 191.739C167.093 191.998 166.598 192.232 166.076 192.4C165.933 192.452 165.776 192.491 165.62 192.543C162.165 193.464 158.514 192.297 155.02 189.196L154.525 188.651C154.433 188.56 154.329 188.495 154.225 188.457C153.078 187.328 151.943 186.005 150.848 184.474C150.405 183.851 149.961 183.228 149.518 182.606C145.281 176.638 141.617 171.487 136.506 170.216C131.422 168.957 127.941 168.27 123.456 170.579C123.077 170.774 122.686 170.994 122.282 171.241C122.008 171.409 121.865 171.708 121.917 172.019C121.93 172.123 121.969 172.227 122.021 172.318C122.243 172.681 122.738 172.798 123.104 172.577C127.641 169.814 130.848 170.423 136.128 171.734C140.679 172.862 144.173 177.792 148.24 183.514C148.684 184.123 149.127 184.759 149.583 185.382C150.066 186.056 150.548 186.692 151.044 187.289C149.87 187.548 148.762 188.275 148.058 189.339C147.171 190.675 146.885 192.478 147.276 194.269C147.576 195.657 148.24 197.019 149.349 198.589C151.109 201.041 153.078 202.559 155.203 203.104C155.685 203.233 156.207 203.285 156.728 203.285C157.928 203.285 159.192 202.961 160.209 202.286C160.209 202.286 160.209 202.312 160.196 202.312C159.662 203.441 159.049 204.206 158.371 204.57C155.842 205.958 153.025 207.061 148.931 204.09C144.603 200.95 135.985 193.438 135.894 193.374C135.568 193.088 135.072 193.127 134.785 193.451C134.499 193.776 134.525 194.269 134.851 194.554C134.942 194.632 143.612 202.195 147.993 205.361C150.183 206.944 152.113 207.528 153.873 207.528C155.802 207.528 157.51 206.814 159.114 205.932C160.079 205.4 160.913 204.414 161.604 202.974C162.856 200.34 162.373 197.24 160.392 195.06L159.01 193.555C160.431 194.126 161.852 194.411 163.273 194.411C164.186 194.411 165.111 194.295 166.011 194.048C166.102 194.022 166.194 193.996 166.285 193.97C166.806 193.815 167.315 193.62 167.784 193.399C168.071 193.257 168.371 193.101 168.645 192.932C170.274 191.92 171.409 190.312 171.813 188.431C172.23 186.511 171.826 184.487 170.731 182.852C169.531 181.088 168.175 179.116 166.702 177.053C166.428 176.664 166.154 176.287 165.868 175.898C165.907 173.9 165.972 171.902 166.076 169.905C166.35 169.905 166.624 169.917 166.911 169.917H167.041C167.797 169.917 168.58 169.866 169.388 169.762C170.744 169.593 171.956 169.1 172.986 168.283C175.646 166.181 176.376 162.419 174.707 159.344C173.638 157.359 172.087 154.544 170.6 151.936C170.131 151.119 169.675 150.328 169.231 149.588C168.879 149.004 168.553 148.446 168.241 147.94C168.593 145.54 168.997 143.14 169.44 140.766C169.479 140.766 169.518 140.766 169.544 140.766C170.066 140.727 170.6 140.649 171.122 140.507C171.278 140.468 171.435 140.429 171.578 140.377C178.371 138.262 179.297 132.995 179.336 132.774C179.362 132.658 179.336 132.541 179.31 132.424L179.336 132.385ZM159.244 196.098C160.092 197.006 160.574 198.135 160.705 199.302C160.653 199.367 160.6 199.432 160.574 199.523C159.818 201.378 157.406 202.027 155.594 201.56C153.847 201.106 152.165 199.795 150.626 197.642C149.636 196.267 149.062 195.086 148.801 193.905C148.501 192.517 148.697 191.155 149.362 190.169C150.04 189.144 151.291 188.56 152.36 188.755C152.856 189.287 153.364 189.78 153.873 190.234L159.231 196.098H159.244ZM160.692 169.009C161.552 169.256 162.726 169.528 164.108 169.71C164.042 170.903 164.003 172.084 163.964 173.265C162.908 171.851 161.813 170.423 160.692 169.009ZM166.715 179.725C167.615 180.997 168.527 182.333 169.44 183.682C169.779 184.188 170.04 184.746 170.196 185.33C170.066 185.421 169.962 185.563 169.909 185.732C169.557 186.978 168.527 188.054 167.211 188.625C166.832 188.794 166.428 188.924 165.998 189.001C165.894 189.027 165.789 189.04 165.672 189.053C164.042 189.261 162.256 188.833 160.561 187.821C158.54 186.614 157.041 184.772 156.428 182.761C155.776 180.595 156.167 178.246 157.458 176.612C158.801 174.912 161.083 174.121 163.038 174.666C163.312 175.029 163.599 175.418 163.873 175.794C164.29 176.352 164.707 176.923 165.124 177.507C165.359 177.831 165.594 178.169 165.829 178.493C166.115 178.895 166.402 179.31 166.702 179.725H166.715ZM162.113 138.911C163.69 139.728 165.529 140.429 167.458 140.662C167.171 142.245 166.898 143.841 166.637 145.424C166.493 145.203 166.324 144.957 166.154 144.71C165.164 143.205 163.782 141.116 162.1 138.911H162.113ZM168.905 152.066C169.257 152.676 169.623 153.311 169.975 153.947C171.213 156.153 172.439 158.397 173.325 160.045C173.86 161.044 174.081 162.107 174.016 163.158C173.977 163.184 173.938 163.223 173.912 163.262C173.443 163.833 172.869 164.482 172.178 164.819C171.33 165.234 170.222 165.247 168.866 164.858C168.462 164.741 168.058 164.598 167.667 164.43C167.237 164.248 166.832 164.04 166.441 163.807C166.363 163.755 166.285 163.703 166.207 163.664C165.62 163.301 165.072 162.873 164.564 162.393C162.804 160.758 161.565 158.54 161.226 156.166C160.926 154.116 161.33 152.17 162.321 150.821C163.234 149.588 164.707 148.849 166.076 148.9C166.363 148.9 166.65 148.952 166.924 149.03C166.989 149.043 167.041 149.056 167.093 149.056C167.341 149.471 167.602 149.899 167.875 150.366C168.201 150.911 168.54 151.495 168.879 152.092L168.905 152.066ZM171.148 138.846C165.894 140.481 159.844 135.745 158.553 134.656C155.346 131.231 151.526 128.286 147.419 127.65C147.432 127.598 147.445 127.546 147.445 127.507C147.484 127.014 148.227 117.725 154.303 114.002C155.828 113.068 157.706 112.484 159.988 112.484C161.161 112.484 162.282 112.692 163.338 113.068C164.785 113.587 166.115 114.404 167.354 115.429C168.241 116.155 169.075 116.999 169.857 117.894C169.688 117.881 169.531 117.868 169.375 117.868C167.732 117.868 166.063 118.556 164.968 119.645C163.195 121.423 162.373 124.199 162.726 127.287C162.869 128.506 163.182 129.687 163.625 130.789C165.033 134.176 167.81 136.822 171.135 137.691C171.865 137.886 172.582 137.977 173.286 137.99C172.673 138.314 171.969 138.613 171.161 138.859L171.148 138.846ZM176.22 135.642C176.154 135.668 176.089 135.681 176.024 135.719C174.851 136.446 173.208 136.615 171.513 136.173C169.192 135.564 167.171 133.916 165.842 131.75C165.007 130.374 164.447 128.792 164.251 127.105C163.964 124.497 164.616 122.175 166.05 120.748C167.471 119.334 170.17 118.854 171.696 120.281C174.003 123.576 175.672 127.209 176.689 129.726C177.276 131.179 177.641 132.256 177.771 132.671C177.667 133.112 177.289 134.331 176.207 135.642H176.22Z"
        fill="#0F1127"
      />
      <Path
        d="M191.253 122.668C189.532 121.514 188.032 120.035 186.885 118.322C184.656 115.04 183.704 110.901 184.251 106.97C184.669 103.986 185.959 101.379 187.837 99.6143C187.811 99.2381 187.798 99.0305 187.798 99.0305C187.341 98.9267 186.898 98.8359 186.481 98.7711C184.499 100.756 183.156 103.558 182.7 106.763C182.087 111.07 183.143 115.598 185.581 119.204C187.159 121.527 189.31 123.473 191.787 124.835C191.605 124.121 191.422 123.395 191.253 122.681V122.668Z"
        fill="#0F1127"
      />
      <Path
        d="M80.6525 157.087C74.5768 157.087 69.6355 152.17 69.6355 146.124C69.6355 140.078 74.5768 135.162 80.6525 135.162C86.7281 135.162 91.6694 140.078 91.6694 146.124C91.6694 152.17 86.7281 157.087 80.6525 157.087ZM80.6525 136.952C75.5677 136.952 71.4347 141.064 71.4347 146.124C71.4347 151.184 75.5677 155.296 80.6525 155.296C85.7372 155.296 89.8702 151.184 89.8702 146.124C89.8702 141.064 85.7372 136.952 80.6525 136.952Z"
        fill="#0F1127"
      />
      <Path
        d="M168.045 26.937C161.696 26.937 156.533 21.7995 156.533 15.4814C156.533 9.16331 161.696 4.02582 168.045 4.02582C174.395 4.02582 179.558 9.16331 179.558 15.4814C179.558 21.7995 174.395 26.937 168.045 26.937ZM168.045 5.80318C162.687 5.80318 158.319 10.1493 158.319 15.4814C158.319 20.8135 162.687 25.1596 168.045 25.1596C173.404 25.1596 177.772 20.8135 177.772 15.4814C177.772 10.1493 173.417 5.80318 168.045 5.80318Z"
        fill="#0F1127"
      />
      <Path
        d="M237.798 155.206C230.744 155.206 225.021 149.497 225.021 142.492C225.021 135.486 230.757 129.778 237.798 129.778C244.838 129.778 250.575 135.486 250.575 142.492C250.575 149.497 244.838 155.206 237.798 155.206ZM237.798 131.555C231.735 131.555 226.807 136.459 226.807 142.492C226.807 148.524 231.735 153.428 237.798 153.428C243.86 153.428 248.789 148.524 248.789 142.492C248.789 136.459 243.86 131.555 237.798 131.555Z"
        fill="#0F1127"
      />
      <Path
        d="M123.508 118.335C128.253 118.335 132.1 114.507 132.1 109.785C132.1 105.064 128.253 101.236 123.508 101.236C118.763 101.236 114.916 105.064 114.916 109.785C114.916 114.507 118.763 118.335 123.508 118.335Z"
        fill="white"
      />
      <Path
        d="M100.587 211.238C105.332 211.238 109.179 207.41 109.179 202.688C109.179 197.967 105.332 194.139 100.587 194.139C95.8421 194.139 91.9954 197.967 91.9954 202.688C91.9954 207.41 95.8421 211.238 100.587 211.238Z"
        fill="white"
      />
      <Path
        d="M224.643 207.398C229.388 207.398 233.235 203.57 233.235 198.848C233.235 194.127 229.388 190.299 224.643 190.299C219.898 190.299 216.051 194.127 216.051 198.848C216.051 203.57 219.898 207.398 224.643 207.398Z"
        fill="white"
      />
      <Path
        d="M216.429 82.7358C216.429 87.4581 212.583 91.2853 207.837 91.2853C203.091 91.2853 199.245 87.4581 199.245 82.7358C199.245 78.0135 203.091 74.1863 207.837 74.1863C212.583 74.1863 216.429 78.0135 216.429 82.7358Z"
        fill="white"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_176_4414">
        <Rect
          width={320}
          height={366}
          fill="white"
          transform="translate(0 -10)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default LibrarySvg;
