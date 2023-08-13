import Image from 'next/image';
import { LucideProps, type Icon as LucideIcon } from 'lucide-react';

export type Icon = LucideIcon;
export const Images = {
  capsule: (props: any) => (
    <Image
      {...props}
      src={`/assets/images/capsuls.svg`}
      alt="    "
      width={600}
      height={300}
    />
  ),
  react: (props: any) => (
    <Image
      {...props}
      src={`/assets/images/react.svg`}
      alt="    "
      width={600}
      height={300}
    />
  ),
  people: (props: any) => (
    <Image
      {...props}
      src={`/assets/images/people.svg`}
      alt="    "
      width={600}
      height={300}
    />
  ),
  tree: (props: any) => (
    <Image
      {...props}
      src={`/assets/images/tree.svg`}
      alt="    "
      width={600}
      height={300}
    />
  ),
  24: (props: any) => (
    <Image
      {...props}
      src={`/assets/images/24.svg`}
      alt="    "
      width={600}
      height={300}
    />
  ),
  left: (props: any) => (
    <Image
      {...props}
      src={`/assets/images/left.svg`}
      alt="    "
      width={600}
      height={300}
    />
  ),
  right: (props: any) => (
    <Image
      {...props}
      src={`/assets/images/right.svg`}
      alt="    "
      width={600}
      height={300}
    />
  ),
  letsTalk: (props: LucideProps) => (
    <svg
      {...props}
      width="103"
      height="103"
      viewBox="0 0 103 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.5094 90.45L25.7588 88.7106L26.2801 87.8862L29.9026 90.177L26.3938 95.7257L25.5219 95.1743L28.5094 90.45Z"
        fill="currentColor"
      />
      <path
        d="M24.295 86.5484L19.9416 91.4624L16.586 88.4896L17.2328 87.7595L19.8162 90.0482L20.9668 88.7495L18.5589 86.6163L19.2057 85.8862L21.6136 88.0194L22.876 86.5944L20.2576 84.2746L20.9044 83.5445L24.295 86.5484Z"
        fill="currentColor"
      />
      <path
        d="M16.3506 78.5133L17.0149 79.3269L12.6851 82.8621L13.8358 84.2714L13.0803 84.8883L10.1145 81.2559L10.8701 80.6391L12.0208 82.0484L16.3506 78.5133Z"
        fill="currentColor"
      />
      <path
        d="M4.08256 66.8361L4.77437 67.4966C4.46441 67.9752 4.36609 68.6946 4.68869 69.5452C4.94144 70.2116 5.46272 70.7662 5.95379 70.58C6.90963 70.2175 5.26248 66.2181 7.38462 65.4133C8.586 64.9577 9.673 65.9196 10.245 67.4279C10.704 68.6381 10.4629 69.6423 9.76348 70.4692L9.07711 69.7967C9.56458 69.2307 9.59697 68.4962 9.291 67.6894C8.94513 66.7774 8.38484 66.358 7.89377 66.5442C6.58716 67.0398 8.29963 70.894 6.40549 71.6123C5.31811 72.0247 4.28252 71.0132 3.78366 69.6978C3.35132 68.5578 3.59116 67.524 4.08256 66.8361Z"
        fill="currentColor"
      />
      <path
        d="M7.19645 54.3114L7.23874 55.361L1.6536 55.586L1.72687 57.404L0.752279 57.4433L0.563459 52.7578L1.53805 52.7185L1.61131 54.5365L7.19645 54.3114Z"
        fill="currentColor"
      />
      <path
        d="M7.00812 49.6921L0.775547 46.479L0.92703 45.2314L7.76101 43.4915L7.62535 44.6087L5.21719 45.2233L4.94475 47.4671L7.1449 48.5656L7.00812 49.6921ZM4.37867 45.2821L2.29158 45.8978C2.10565 45.9508 1.85879 45.8831 1.66328 45.8593L1.64067 46.0456C1.83618 46.0693 2.09321 46.0533 2.25993 46.1585L4.14127 47.2372L4.37867 45.2821Z"
        fill="currentColor"
      />
      <path
        d="M7.93159 38.9554L8.83702 35.8295L9.77388 36.1009L8.58143 40.2177L2.27559 38.3912L2.56261 37.4003L7.93159 38.9554Z"
        fill="currentColor"
      />
      <path
        d="M6.98115 32.0211L5.97699 28.6898L6.55595 27.4697L7.69741 30.9491L12.5997 30.0468L12.057 31.1907L7.94792 31.9089L8.28532 33.0136L10.6578 34.1394L10.2155 35.0714L4.28434 32.257L4.7266 31.325L6.69237 32.2578C6.94656 32.3784 7.15783 32.6551 7.33836 32.8653L7.47851 32.745C7.29798 32.5347 7.05771 32.2754 6.98115 32.0211Z"
        fill="currentColor"
      />
      <path
        d="M28.7638 12.4281L31.6454 10.9157L32.0987 11.7794L28.3036 13.7712L25.2527 7.95815L26.1662 7.47871L28.7638 12.4281Z"
        fill="currentColor"
      />
      <path
        d="M34.2491 10.728L32.1702 4.50086L36.4224 3.08124L36.7313 4.00642L33.4576 5.09935L34.007 6.74511L37.0584 5.72643L37.3672 6.65161L34.3159 7.67029L34.9188 9.47617L38.237 8.3684L38.5459 9.29358L34.2491 10.728Z"
        fill="currentColor"
      />
      <path
        d="M45.1804 7.86643L44.1436 8.03493L43.2469 2.51765L41.4511 2.80951L41.2946 1.84676L45.9232 1.09454L46.0796 2.05729L44.2838 2.34915L45.1804 7.86643Z"
        fill="currentColor"
      />
      <path
        d="M61.4266 3.08059L60.5088 3.34949C60.2492 2.84173 59.6754 2.39691 58.7775 2.25098C58.0739 2.13665 57.333 2.31079 57.2487 2.82919C57.0848 3.83822 61.3719 4.41143 61.0078 6.65167C60.8017 7.9199 59.4251 8.38031 57.8329 8.12155C56.5554 7.91393 55.8063 7.20308 55.4398 6.18386L56.3654 5.92571C56.6119 6.63088 57.2318 7.02618 58.0834 7.16459C59.0462 7.32105 59.6896 7.04554 59.7738 6.52714C59.998 5.14782 55.8039 4.70375 56.1289 2.7042C56.3154 1.55631 57.7092 1.16521 59.0978 1.39088C60.3012 1.58645 61.0766 2.31107 61.4266 3.08059Z"
        fill="currentColor"
      />
      <path
        d="M70.7169 12.0393L69.7868 11.5512L72.3845 6.60175L70.7734 5.7562L71.2267 4.89255L75.3789 7.07178L74.9256 7.93544L73.3146 7.0899L70.7169 12.0393Z"
        fill="currentColor"
      />
      <path
        d="M74.812 14.186L80.711 10.395L81.7157 11.15L79.8055 17.9384L78.9058 17.2623L79.5776 14.8695L77.7707 13.5116L75.7192 14.8678L74.812 14.186ZM79.946 14.1139L80.4563 11.9985C80.5033 11.811 80.6854 11.6311 80.8037 11.4737L80.6538 11.361C80.5355 11.5184 80.4208 11.749 80.2463 11.8408L78.3715 12.9307L79.946 14.1139Z"
        fill="currentColor"
      />
      <path
        d="M83.648 20.3534L85.9023 22.7005L85.1989 23.3762L82.2299 20.2851L86.9646 15.7373L87.6792 16.4813L83.648 20.3534Z"
        fill="currentColor"
      />
      <path
        d="M90.13 22.9972L93.517 23.7932L94.2842 24.9047L90.7002 24.1535L89.0304 28.8502L88.3112 27.8082L89.7438 23.8906L88.6183 23.6304L86.4572 25.1221L85.8711 24.2731L91.274 20.5437L91.8601 21.3928L90.0694 22.6288C89.8378 22.7886 89.4926 22.8332 89.2202 22.8844L89.2544 23.066C89.5267 23.0148 89.8714 22.9364 90.13 22.9972Z"
        fill="currentColor"
      />
      <path
        d="M96.2053 51.6585L96.0743 54.9103L95.0997 54.871L95.2723 50.5884L101.832 50.8528L101.79 51.8836L96.2053 51.6585Z"
        fill="currentColor"
      />
      <path
        d="M94.9344 57.2597L101.367 58.5729L100.47 62.9653L99.5144 62.7702L100.205 59.3886L98.5047 59.0415L97.8613 62.1934L96.9056 61.9983L97.5491 58.8464L95.6837 58.4656L94.9839 61.8931L94.0283 61.698L94.9344 57.2597Z"
        fill="currentColor"
      />
      <path
        d="M91.9476 68.1574L92.32 67.1753L97.5465 69.1574L98.1917 67.4562L99.1037 67.802L97.4408 72.1866L96.5288 71.8408L97.174 70.1395L91.9476 68.1574Z"
        fill="currentColor"
      />
      <path
        d="M87.9693 84.6194L88.1954 83.6901C88.7649 83.7192 89.437 83.4446 90.0124 82.74C90.4632 82.1878 90.6828 81.4591 90.276 81.1269C89.4841 80.4804 86.8442 83.9066 85.0861 82.4712C84.0908 81.6585 84.3804 80.2362 85.4006 78.9867C86.2191 77.9841 87.2093 77.6908 88.2752 77.8831L88.036 78.8137C87.302 78.6746 86.6498 79.0138 86.1041 79.6821C85.4872 80.4377 85.4041 81.1326 85.8109 81.4648C86.8934 82.3485 89.375 78.9384 90.9442 80.2196C91.845 80.9551 91.4868 82.3577 90.5971 83.4474C89.826 84.3918 88.8107 84.701 87.9693 84.6194Z"
        fill="currentColor"
      />
      <path
        d="M75.5651 88.1849L76.4529 87.6235L79.4404 92.3479L80.9782 91.3754L81.4995 92.1998L77.5362 94.7061L77.0148 93.8817L78.5526 92.9093L75.5651 88.1849Z"
        fill="currentColor"
      />
      <path
        d="M71.6603 90.6584L71.994 97.6626L70.8378 98.1552L65.914 93.1067L66.9493 92.6656L68.6857 94.4439L70.765 93.5579L70.6163 91.1033L71.6603 90.6584ZM69.1558 95.1406L70.7326 96.6402C70.8715 96.7748 70.9362 97.0224 71.0134 97.2036L71.186 97.1301C71.1088 96.9489 70.9664 96.7343 70.9742 96.5373L70.9677 94.3687L69.1558 95.1406Z"
        fill="currentColor"
      />
      <path
        d="M61.9009 95.2278L58.7411 96.0066L58.5077 95.0596L62.6692 94.0339L64.2403 100.408L63.2386 100.655L61.9009 95.2278Z"
        fill="currentColor"
      />
      <path
        d="M56.3693 99.5178L53.9865 102.053L52.6403 102.162L55.0829 99.4335L51.8503 95.6391L53.1123 95.5372L55.7888 98.7367L56.5768 97.8921L56.3655 95.2746L57.3938 95.1916L57.9221 101.735L56.8938 101.818L56.7187 99.6496C56.6961 99.3691 56.8301 99.0478 56.9219 98.7864L56.7476 98.7252C56.6558 98.9866 56.5513 99.3244 56.3693 99.5178Z"
        fill="currentColor"
      />
      <circle cx="16.8379" cy="19.3447" r="1.33981" fill="currentColor" />
      <circle cx="95.8847" cy="38.7719" r="1.33981" fill="currentColor" />
      <circle cx="39.6132" cy="97.7231" r="1.33981" fill="currentColor" />
    </svg>
  ),
};
