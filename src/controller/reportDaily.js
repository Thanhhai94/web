import staffServices from "../services/StaffService";

const reportDailyTable = async (req,res) => {
    
    let CIF = req.session.CIF
    let staff = await staffServices.getStaffInfo(CIF)
    return res.render('report_daily_table',{
        pageTitle: 'Báo cáo ngày',
        staff:staff,
    })
}

module.exports = {
    reportDailyTable: reportDailyTable,
}