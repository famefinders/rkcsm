import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  // Mock data - Jab backend banega tab yahan useEffect me API se data fetch hoga (e.g., fetch('/api/enquiries'))
  const [enquiries, setEnquiries] = useState([
    { id: 1, name: "Aarav Sharma", phone: "9876543210", course: "Mass Communication", date: "2026-09-29", status: "Pending" },
    { id: 2, name: "Priya Singh", phone: "9123456789", course: "Computer Science & IT", date: "2026-09-30", status: "Follow-up" },
    { id: 3, name: "Rahul Verma", phone: "9988776655", course: "Law / Legal Studies", date: "2026-09-30", status: "Converted" }
  ]);

  const [noticeText, setNoticeText] = useState("Admissions open for 2026 — Enquire now for courses, eligibility and admission guidance.");

  // Handler to export table data to CSV/Excel (Frontend level export)
  const exportToCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8," + ["ID,Name,Phone,Course,Date,Status", ...enquiries.map(e => `${e.id},${e.name},${e.phone},${e.course},${e.date},${e.status}`)].join("\n");
    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "student_enquiries.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ background: "#f4f6f9", minHeight: "100vh", padding: "40px 20px", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* HEADER */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", background: "#ffffff", padding: "20px 30px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.05)" }}>
          <div>
            <span style={{ background: "#d59b24", color: "#101b35", fontSize: "11px", fontWeight: "800", padding: "4px 8px", borderRadius: "4px", textTransform: "uppercase" }}>Admin Panel (Frontend View)</span>
            <h1 style={{ fontSize: "24px", color: "#101b35", margin: "8px 0 0 0" }}>RK Group - Management Dashboard</h1>
          </div>
          <Link to="/" style={{ color: "#101b35", textDecoration: "none", fontWeight: "600", fontSize: "14px", border: "1px solid #dcdfe6", padding: "8px 16px", borderRadius: "6px" }}>
            ← Back to Website
          </Link>
        </div>

        {/* QUICK STATS CARDS */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "30px" }}>
          <div style={{ background: "#ffffff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.05)" }}>
            <p style={{ margin: "0", color: "#667085", fontSize: "14px" }}>Total Enquiries</p>
            <h3 style={{ margin: "10px 0 0 0", fontSize: "28px", color: "#101b35" }}>{enquiries.length}</h3>
          </div>
          <div style={{ background: "#ffffff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.05)" }}>
            <p style={{ margin: "0", color: "#667085", fontSize: "14px" }}>Active Courses Listed</p>
            <h3 style={{ margin: "10px 0 0 0", fontSize: "28px", color: "#101b35" }}>12</h3>
          </div>
          <div style={{ background: "#ffffff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.05)" }}>
            <p style={{ margin: "0", color: "#667085", fontSize: "14px" }}>System Status</p>
            <h3 style={{ margin: "10px 0 0 0", fontSize: "20px", color: "#027a48" }}>● Live (Vercel)</h3>
          </div>
        </div>

        {/* NOTICE BOARD EDITOR SECTION */}
        <div style={{ background: "#ffffff", padding: "25px", borderRadius: "10px", marginBottom: "30px", boxShadow: "0 2px 5px rgba(0,0,0,0.05)" }}>
          <h3 style={{ fontSize: "18px", color: "#101b35", margin: "0 0 15px 0" }}>Update Scrolling Notice Bar (CMS Control)</h3>
          <div style={{ display: "flex", gap: "15px" }}>
            <input 
              type="text" 
              value={noticeText} 
              onChange={(e) => setNoticeText(e.target.value)} 
              style={{ flex: 1, padding: "10px 14px", border: "1px solid #dcdfe6", borderRadius: "6px", fontSize: "14px" }}
            />
            <button 
              onClick={() => alert("Notice text updated successfully in state! (Connect to DB later)")}
              style={{ background: "#101b35", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "6px", fontWeight: "600", cursor: "pointer" }}
            >
              Update Notice
            </button>
          </div>
        </div>

        {/* ENQUIRIES TABLE SECTION */}
        <div style={{ background: "#ffffff", padding: "25px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.05)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <h3 style={{ fontSize: "18px", color: "#101b35", margin: 0 }}>Recent Student Enquiries & Leads</h3>
            <button 
              onClick={exportToCSV}
              style={{ background: "#027a48", color: "#fff", border: "none", padding: "10px 16px", borderRadius: "6px", fontWeight: "600", fontSize: "13px", cursor: "pointer" }}
            >
              📥 Export to Excel / CSV
            </button>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "14px" }}>
              <thead>
                <tr style={{ background: "#f8f9fa", borderBottom: "2px solid #eaecf0", color: "#475467" }}>
                  <th style={{ padding: "12px" }}>ID</th>
                  <th style={{ padding: "12px" }}>Student Name</th>
                  <th style={{ padding: "12px" }}>Phone</th>
                  <th style={{ padding: "12px" }}>Course</th>
                  <th style={{ padding: "12px" }}>Date</th>
                  <th style={{ padding: "12px" }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((item) => (
                  <tr key={item.id} style={{ borderBottom: "1px solid #eaecf0" }}>
                    <td style={{ padding: "12px", color: "#667085" }}>#0{item.id}</td>
                    <td style={{ padding: "12px", fontWeight: "600", color: "#101b35" }}>{item.name}</td>
                    <td style={{ padding: "12px", color: "#475467" }}>{item.phone}</td>
                    <td style={{ padding: "12px", color: "#475467" }}>{item.course}</td>
                    <td style={{ padding: "12px", color: "#667085" }}>{item.date}</td>
                    <td style={{ padding: "12px" }}>
                      <span style={{ 
                        padding: "4px 10px", 
                        borderRadius: "20px", 
                        fontSize: "12px", 
                        fontWeight: "600",
                        background: item.status === "Converted" ? "#ecfdf3" : item.status === "Follow-up" ? "#fffaeb" : "#fef3f2",
                        color: item.status === "Converted" ? "#027a48" : item.status === "Follow-up" ? "#b54708" : "#b42318"
                      }}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;