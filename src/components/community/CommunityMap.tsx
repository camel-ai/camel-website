"use client";

import React, { useState, useEffect } from "react";
import WorldMap from "react-svg-worldmap";

/**
 * Data format from your SQL query (github_events + github_users):
 *
 * WITH group_by_area AS (
 *   SELECT gu.country_code AS country_or_area, COUNT(1) as cnt
 *   FROM github_events ge
 *   LEFT JOIN github_users gu ON ge.actor_login = gu.login
 *   WHERE repo_id IN (...) AND ge.type = 'WatchEvent' ...
 *   GROUP BY country_or_area
 * ), summary AS (SELECT SUM(cnt) AS total FROM group_by_area)
 * SELECT country_or_area, cnt AS count, cnt / summary.total AS percentage
 * FROM group_by_area, summary ORDER BY cnt DESC;
 */
export type CommunityCountryData = {
  country_or_area: string;
  count: number;
  percentage: number;
};

type CommunityMapProps = {
  /**
   * Data from your SQL query: { country_or_area, count, percentage }
   * country_or_area should be ISO 3166-1 alpha-2 (e.g. "US", "BR", "CN")
   */
  data?: CommunityCountryData[];
  /** Fallback data when no data is provided (for demo/preview) */
  defaultData?: CommunityCountryData[];
};

function toWorldMapData(rows: CommunityCountryData[]) {
  return rows.map((row) => ({
    country: row.country_or_area.toLowerCase(),
    value: row.count,
  }));
}

const FALLBACK_DATA: CommunityCountryData[] = [
  { country_or_area: "US", count: 8500, percentage: 0.22 },
  { country_or_area: "CN", count: 6200, percentage: 0.16 },
  { country_or_area: "IN", count: 4800, percentage: 0.12 },
  { country_or_area: "DE", count: 3200, percentage: 0.08 },
  { country_or_area: "GB", count: 2900, percentage: 0.075 },
  { country_or_area: "BR", count: 2100, percentage: 0.055 },
  { country_or_area: "JP", count: 1900, percentage: 0.049 },
  { country_or_area: "FR", count: 1700, percentage: 0.044 },
  { country_or_area: "KR", count: 1400, percentage: 0.036 },
  { country_or_area: "CA", count: 1200, percentage: 0.031 },
  { country_or_area: "AU", count: 980, percentage: 0.025 },
  { country_or_area: "NL", count: 750, percentage: 0.019 },
  { country_or_area: "RU", count: 620, percentage: 0.016 },
  { country_or_area: "PL", count: 510, percentage: 0.013 },
  { country_or_area: "ES", count: 440, percentage: 0.011 },
];

export function CommunityMap({ data, defaultData = FALLBACK_DATA }: CommunityMapProps) {
  const [mounted, setMounted] = useState(false);
  const rows = data && data.length > 0 ? data : defaultData;
  const mapData = toWorldMapData(rows);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="relative flex min-h-[400px] w-full items-center justify-center overflow-visible"
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="relative flex w-full items-center justify-center overflow-visible">
      <WorldMap
        color="var(--color-neon-primary)"
        valueSuffix=" stargazers"
        size="responsive"
        data={mapData}
        richInteraction
        tooltipBgColor="var(--card)"
        tooltipTextColor="var(--color-gray-primary)"
        borderColor="var(--neon-200)"
        backgroundColor="transparent"
        strokeOpacity={1}
        tooltipTextFunction={({ countryName, countryValue }) =>
          `${countryName}: ${Number(countryValue).toLocaleString()} stargazers`
        }
      />
    </div>
  );
}
