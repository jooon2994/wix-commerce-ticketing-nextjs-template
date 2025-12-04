'use client';
import { useEffect, useState } from 'react';

export const DeploymentInfo = () => {
  const [deploymentInfo, setDeploymentInfo] = useState<{
    buildTimestamp?: string;
    environment?: string;
  } | null>(null);

  useEffect(() => {
    fetch('/api/deployment-info')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch deployment info');
        return res.json();
      })
      .then((data) => {
        if (data && typeof data.buildTimestamp === 'string') {
          setDeploymentInfo(data);
        }
      })
      .catch(() => setDeploymentInfo(null));
  }, []);

  if (!deploymentInfo?.buildTimestamp) {
    return null;
  }

  const buildDate = new Date(deploymentInfo.buildTimestamp);

  // Check if date is valid
  if (isNaN(buildDate.getTime())) {
    return null;
  }

  const formattedDate = buildDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="text-xs text-gray-500 mt-2">
      Last deployed: {formattedDate}
    </div>
  );
};
