import db from "../models/index"

const getDataHDVDaily = async(Rptdate,KHOI_QL,NHOM_KH,CHI_TIEU) => {
    try {
        const KQ = await db.DAILYREPORT.findAll({
            where: {
                Rptdate: Rptdate,
                KHOI_QL: KHOI_QL,
                NHOM_KH: NHOM_KH,
                CHI_TIEU: CHI_TIEU
            }
        })
        if(KQ.length) {
            return KQ
        } else {
            return [{
                id:1000000,
                Rptdate: Rptdate,
                KHOI_QL: KHOI_QL,
                NHOM_KH: NHOM_KH,
                CHI_TIEU: CHI_TIEU,
                Amt: '/',
                Dtd: '/',
                Mtd: '/',
                Ytd: '/',
                Ty_trong:'/'
            }]
        }
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getDataHDVDaily: getDataHDVDaily
}