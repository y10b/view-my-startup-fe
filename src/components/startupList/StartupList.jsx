import React, { useState, useEffect } from "react";
import styles from "../../styles/table.module.scss";
import temporarilyImg from "../../assets/logo.png";
import clsx from "clsx";
import { Link } from "react-router-dom";

const StartupList = ({ startups, currentPage, itemsPerPage }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (startups.length > 0) {
      setLoading(false);
    }
  }, [startups]);

  // 페이지네이션을 고려한 순위 계산
  const getRank = (index) => (currentPage - 1) * itemsPerPage + index + 1;

  return (
    <div className={styles.table}>
      <div className={clsx(styles.tableHeaderMT, styles.tableHeader)}>
        <p className={styles.ranking}>순위</p>
        <p className={styles.name}>기업 명</p>
        <p className={styles.description}>기업 소개</p>
        <p className={styles.info}>카테고리</p>
        <p className={styles.info}>누적 투자 금액</p>
        <p className={styles.info}>매출액</p>
        <p className={styles.info}>고용 인원</p>
      </div>

      {/* 스타트업 목록 렌더링 */}
      <div className={styles.tableContents}>
        {loading ? (
          <p className={styles.dataMessage}>로딩 중...</p> // 로딩 중일 때 메시지
        ) : startups.length > 0 ? (
          startups.map((startup, index) => (
            <div className={styles.tableContent} key={startup.id}>
              <p className={styles.ranking}>{getRank(index)}위</p>
              <Link
                to={`/companies/${startup.id}`}
                className={styles.nameWrapper}
              >
                <img
                  src={startup.imageUrl || `${temporarilyImg}`}
                  alt={startup.name}
                  className={styles.image}
                />
                <p className={styles.name}>{startup.name}</p>
              </Link>
              <p className={styles.description}>{startup.description}</p>
              <p className={styles.info}>{startup.category}</p>
              <p className={styles.info}>{startup.totalInvestment}억 원</p>
              <p className={styles.info}>{startup.revenue}억 원</p>
              <p className={styles.info}>{startup.employees}명</p>
            </div>
          ))
        ) : (
          <p className={styles.dataMessage}>데이터가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default StartupList;
