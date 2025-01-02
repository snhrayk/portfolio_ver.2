// import { useRouter } from "next/router";
// import Image from "next/image";
// import styles from "./[id].module.scss";

// const WorkDetail = ({ work, detail }) => {
//   const router = useRouter();

//   if (!work || !detail) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className={styles.detailWrap}>
//       <h1>{work.title}</h1>
//       {work.img && (
//         <Image
//           src={work.img}
//           alt={work.title}
//           width={600}
//           height={400}
//           className={styles.detailImg}
//         />
//       )}
//       <p>{detail.description}</p>
//       <p>使用技術: {detail.technologies.join(", ")}</p>
//       <a href={detail.link} target="_blank" rel="noopener noreferrer">
//         プロジェクトを見る
//       </a>
//       <button onClick={() => router.back()}>戻る</button>
//     </div>
//   );
// };

// export async function getStaticPaths() {
//   const heading = await import("../data/worksHeading");
//   const paths = heading.default.map((work) => ({
//     params: { id: work.id.toString() },
//   }));

//   return { paths, fallback: true };
// }

// export async function getStaticProps({ params }) {
//   const heading = await import("../data/worksHeading");
//   const details = await import("../data/worksDetail");

//   const work = heading.default.find((item) => item.id.toString() === params.id);
//   const detail = details.default.find(
//     (item) => item.id.toString() === params.id
//   );

//   return { props: { work, detail } };
// }

// export default WorkDetail;
