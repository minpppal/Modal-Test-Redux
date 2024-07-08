"use client";
import React from "react";
import CommentReportModal from "@/components/commentReportModal/CommentReportModal";
import { MdOutlineReport } from "react-icons/md";
import styles from "@/app/main/page.module.scss";

const Page = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.commentBox}>
        <div className={styles.commentProfileImage}></div>
        <div className={styles.comment}></div>
        <div className={styles.commentReport}>
          <MdOutlineReport onClick={} />
        </div>
        {/* {isModalOpen ? <CommentReportModal /> : null} */}
      </div>
    </div>
  );
};

export default Page;
