
import { useEffect, useRef } from "react"

export default function VisitorsChart({ mobile = false }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    const dataPoints = [400, 450, 600, 500, 650, 550, 700, 450, 800, 1200, 600, 500, 700, 900, 800, 1000]
    const maxDataPoint = Math.max(...dataPoints)

    const chartWidth = rect.width
    const chartHeight = rect.height - 20
    const padding = { top: 20, right: 10, bottom: 20, left: 40 }
    const graphWidth = chartWidth - padding.left - padding.right
    const graphHeight = chartHeight - padding.top - padding.bottom

    ctx.clearRect(0, 0, chartWidth, chartHeight)

    ctx.fillStyle = "#666"
    ctx.font = "10px Arial"
    ctx.textAlign = "right"

    const yLabels = ["1.6k", "1.2k", "800", "400", "200"]
    const yStep = graphHeight / (yLabels.length - 1)

    yLabels.forEach((label, i) => {
      const y = padding.top + i * yStep
      ctx.fillText(label, padding.left - 5, y + 3)

      ctx.beginPath()
      ctx.strokeStyle = "#333"
      ctx.moveTo(padding.left, y)
      ctx.lineTo(chartWidth - padding.right, y)
      ctx.stroke()
    })

    ctx.textAlign = "center"
    const xLabels = ["Mar 1", "Mar 5", "Mar 10", "Mar 15", "Mar 20", "Mar 25", "Mar 30"]
    const xStep = graphWidth / (xLabels.length - 1)

    xLabels.forEach((label, i) => {
      const x = padding.left + i * xStep
      ctx.fillText(label, x, chartHeight - 5)
    })

    ctx.beginPath()
    ctx.strokeStyle = "white"
    ctx.lineWidth = 2

    dataPoints.forEach((point, i) => {
      const x = padding.left + (i / (dataPoints.length - 1)) * graphWidth
      const y = padding.top + graphHeight - (point / maxDataPoint) * graphHeight

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()
  }, [mobile])

  return (
    <div
      className={`bg-black border border-gray-500 rounded-lg p-4 ${
        mobile ? "mb-4" : ""
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          {/* <span className="mr-2"></span> */}
          <button className="rounded-full badge bg-black text-white text-xs px-4 py-1  flex items-center">
            Visitors
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <button className="rounded-full badge bg-black text-white text-xs px-4  py-1  flex items-center">
            Last 30 days
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <button className="rounded-full badge bg-black text-white text-xs px-4  py-1  flex items-center  ">
            +Add
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-2">
        <h3 className="text-3xl font-bold">13.49K</h3>
        <div className="flex   flex-col">
          <span className="text-xs text-green-500">+100%</span>
          <div className="text-xs text-gray-400">(1001)</div>
        </div>
      </div>

      <div className="h-48">
        <canvas ref={canvasRef} className="w-full h-full"></canvas>
      </div>
    </div>
  );
}
