// import React from 'react';
// import { resourcesLinks, platformLinks, communityLinks } from "../../constants";
// const Footer = () => {
//   return (
//     <footer className="mt-20 border-t py-10 border-neutral-700">
//       <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
//         <div>
//           <h3 className="text-md font-semibold mb-4">Resources</h3>
//           <ul className="space-y-2">
//             {resourcesLinks.map((link, index) => (
//               <li key={index}>
//                 <a
//                   href={link.href}
//                   className="text-neutral-300 hover:text-white"
//                 >
//                   {link.text}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-md font-semibold mb-4">Platform</h3>
//           <ul className="space-y-2">
//             {platformLinks.map((link, index) => (
//               <li key={index}>
//                 <a
//                   href={link.href}
//                   className="text-neutral-300 hover:text-white"
//                 >
//                   {link.text}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-md font-semibold mb-4">Community</h3>
//           <ul className="space-y-2">
//             {communityLinks.map((link, index) => (
//               <li key={index}>
//                 <a
//                   href={link.href}
//                   className="text-neutral-300 hover:text-white"
//                 >
//                   {link.text}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { resourcesLinks, platformLinks, communityLinks } from "../../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-around">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {resourcesLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-neutral-300 hover:text-white transition-colors duration-300"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                {platformLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-neutral-300 hover:text-white transition-colors duration-300"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                {communityLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-neutral-300 hover:text-white transition-colors duration-300"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <p>&copy; {new Date().getFullYear()} IntelliFit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
