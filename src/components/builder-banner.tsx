"use client";

import { useEffect, useRef } from "react";

export function BuilderBanner({ userId }: { userId: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current || !containerRef.current) return;
    loadedRef.current = true;

    fetch(`https://builderbanner.com/api/banner/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (!containerRef.current) return;
        renderBanner(data, containerRef.current, userId);
      })
      .catch((err) => console.error("BuilderBanner:", err));
  }, [userId]);

  return <div ref={containerRef} id="builder-banner" />;
}

function renderBanner(
  data: { projects: Array<{ id: string; name: string; url: string }>; settings: any },
  container: HTMLElement,
  userId: string
) {
  const { settings, projects } = data;
  const colors = settings.colors;
  const isLight = settings.theme === "LIGHT";
  const isVertical = settings.style === "VERTICAL";

  const pillBg = isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.06)";
  const pillHoverBg = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)";

  const css = `
    .bb-root{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;display:inline-flex;align-items:center;gap:10px;padding:10px 14px;border-radius:12px;background:${colors.bg};border:1px solid ${colors.border};transition:border-color 0.2s}
    .bb-root:hover{border-color:${isLight ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.1)"}}
    .bb-label{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.12em;color:${colors.text};opacity:0.4}
    .bb-links{display:flex;align-items:center;gap:6px;${isVertical ? "flex-direction:column;" : "flex-wrap:wrap;"}}
    .bb-link{padding:5px 10px;border-radius:20px;text-decoration:none;font-size:12px;font-weight:500;background:${pillBg};color:${colors.text};transition:all 0.15s ease}
    .bb-link:hover{background:${pillHoverBg};transform:translateY(-1px)}
  `;

  const pageUrl = encodeURIComponent(typeof window !== "undefined" ? window.location.href : "");
  const baseUrl = "https://builderbanner.com";

  let html = `<style>${css}</style><div class="bb-root">`;
  if (settings.label) {
    html += `<span class="bb-label">${escapeHtml(settings.label)}</span>`;
  }
  html += `<div class="bb-links">`;

  projects.forEach((project: { id: string; name: string }) => {
    const trackingUrl = `${baseUrl}/api/go/${project.id}?ref=${pageUrl}`;
    html += `<a href="${escapeAttr(trackingUrl)}" target="_blank" rel="noopener" class="bb-link">${escapeHtml(project.name)}</a>`;
  });

  html += `</div></div>`;
  container.innerHTML = html;
}

function escapeHtml(text: string) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function escapeAttr(text: string) {
  return text.replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
