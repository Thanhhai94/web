import staffServices from "../services/StaffService";
import dayjs from "dayjs";
import dailyServices from "../services/dailyService"

const reportDailyTable = async (req,res) => {
    
    let CIF = req.session.CIF
    let staff = await staffServices.getStaffInfo(CIF)
    let date = dayjs(new Date()).format("YYYY-MM-DD")
    let Rptdate = date.replaceAll('-','')
    // QUY_MO_KKH
    let QUY_MO_KKH_TOANHANG_TOANHANG = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','QUY_MO_KKH')
    let QUY_MO_KKH_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','QUY_MO_KKH')
    let QUY_MO_KKH_KHDN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','QUY_MO_KKH')
    let QUY_MO_KKH_KHDN_Core = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','QUY_MO_KKH')
    let QUY_MO_KKH_KHDN_Upper = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','QUY_MO_KKH')
    let QUY_MO_KKH_KHDNL_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','TONG_KHOI','QUY_MO_KKH')
    let QUY_MO_KKH_KHDNL_Non_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','QUY_MO_KKH')
    let QUY_MO_KKH_KHDNL_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','QUY_MO_KKH')
   
    // QUY_MO_CKH
    let QUY_MO_CKH_TOANHANG_TOANHANG = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','QUY_MO_CKH')
    let QUY_MO_CKH_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','QUY_MO_CKH')
    let QUY_MO_CKH_KHCN_6M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','1. <6M','QUY_MO_CKH')
    let QUY_MO_CKH_KHCN_6M9M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','2. 6-<9M','QUY_MO_CKH')
    let QUY_MO_CKH_KHCN_9M12M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','3. 9-<12M','QUY_MO_CKH')
    let QUY_MO_CKH_KHCN_12M= await dailyServices.getDataHDVDaily(Rptdate,'KHCN','4. >=12M','QUY_MO_CKH')
    let QUY_MO_CKH_KHDN_TONGKHOI= await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','QUY_MO_CKH')
    let QUY_MO_CKH_KHDN_Core= await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','QUY_MO_CKH')
    let QUY_MO_CKH_KHDN_Upper= await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','QUY_MO_CKH')
    let QUY_MO_CKH_KHDNL_TONGKHOI= await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','QUY_MO_CKH')
    let QUY_MO_CKH_KHDNL_PVN= await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','QUY_MO_CKH')
    let QUY_MO_CKH_KHDNL_Non_PVN= await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','QUY_MO_CKH')
    
    // LAI_SUAT_KHD
    let LAI_SUAT_KKH_TOANHANG_TOANHANG = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHDN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHDN_Core = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHDN_Upper = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHDNL_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','TONG_KHOI','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHDNL_Non_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHDNL_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','LAI_SUAT_KKH')
    
    // LAI_SUAT_CKH
    let LAI_SUAT_CKH_TOANHANG_TOANHANG = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHCN_6M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','1. <6M','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHCN_6M9M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','2. 6-<9M','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHCN_9M12M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','3. 9-<12M','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHCN_12M= await dailyServices.getDataHDVDaily(Rptdate,'KHCN','4. >=12M','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHDN_TONGKHOI= await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHDN_Core= await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHDN_Upper= await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHDNL_TONGKHOI= await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHDNL_PVN= await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHDNL_Non_PVN= await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','LAI_SUAT_CKH')

    //BIEN_DO_CONG
    let BIEN_DO_CONG_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHCN_6M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','1. <6M','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHCN_6M9M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','2. 6-<9M','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHCN_9M12M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','3. 9-<12M','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHCN_12M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','4. >=12M','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHDN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHDN_Core = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHDN_Upper = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHDNL_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','TONG_KHOI','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHDNL_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHDNL_Non_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','BIEN_DO_CONG')

    //SO_DU_BIEN_DO_CONG
    let SO_DU_BIEN_DO_CONG_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHCN_6M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','1. <6M','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHCN_6M9M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','2. 6-<9M','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHCN_9M12M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','3. 9-<12M','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHCN_12M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','4. >=12M','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHDN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHDN_Core = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHDN_Upper = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHDNL_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','TONG_KHOI','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHDNL_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHDNL_Non_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','SO_DU_BIEN_DO_CONG')


    return res.render('report_daily_table',{
        pageTitle: 'Báo cáo ngày',
        staff:staff,
        date: date,
        QUY_MO_KKH_TOANHANG_TOANHANG :  QUY_MO_KKH_TOANHANG_TOANHANG,    
        QUY_MO_KKH_KHCN_TONGKHOI :  QUY_MO_KKH_KHCN_TONGKHOI,
        QUY_MO_KKH_KHDN_TONGKHOI :  QUY_MO_KKH_KHDN_TONGKHOI,
        QUY_MO_KKH_KHDN_Core : QUY_MO_KKH_KHDN_Core,
        QUY_MO_KKH_KHDN_Upper :  QUY_MO_KKH_KHDN_Upper,
        QUY_MO_KKH_KHDNL_TONGKHOI :  QUY_MO_KKH_KHDNL_TONGKHOI,
        QUY_MO_KKH_KHDNL_Non_PVN :  QUY_MO_KKH_KHDNL_Non_PVN,
        QUY_MO_KKH_KHDNL_PVN :  QUY_MO_KKH_KHDNL_PVN,
        QUY_MO_CKH_TOANHANG_TOANHANG :  QUY_MO_CKH_TOANHANG_TOANHANG,
        QUY_MO_CKH_KHCN_TONGKHOI :  QUY_MO_CKH_KHCN_TONGKHOI,
        QUY_MO_CKH_KHCN_6M :  QUY_MO_CKH_KHCN_6M,
        QUY_MO_CKH_KHCN_6M9M :  QUY_MO_CKH_KHCN_6M9M,
        QUY_MO_CKH_KHCN_9M12M :  QUY_MO_CKH_KHCN_9M12M,
        QUY_MO_CKH_KHCN_12M :  QUY_MO_CKH_KHCN_12M,
        QUY_MO_CKH_KHDN_TONGKHOI :  QUY_MO_CKH_KHDN_TONGKHOI,
        QUY_MO_CKH_KHDN_Core :  QUY_MO_CKH_KHDN_Core,
        QUY_MO_CKH_KHDN_Upper :  QUY_MO_CKH_KHDN_Upper,
        QUY_MO_CKH_KHDNL_TONGKHOI :  QUY_MO_CKH_KHDNL_TONGKHOI,
        QUY_MO_CKH_KHDNL_PVN :  QUY_MO_CKH_KHDNL_PVN,
        QUY_MO_CKH_KHDNL_Non_PVN :  QUY_MO_CKH_KHDNL_Non_PVN,

        LAI_SUAT_KKH_TOANHANG_TOANHANG :  LAI_SUAT_KKH_TOANHANG_TOANHANG,    
        LAI_SUAT_KKH_KHCN_TONGKHOI :  LAI_SUAT_KKH_KHCN_TONGKHOI,
        LAI_SUAT_KKH_KHDN_TONGKHOI :  LAI_SUAT_KKH_KHDN_TONGKHOI,
        LAI_SUAT_KKH_KHDN_Core : LAI_SUAT_KKH_KHDN_Core,
        LAI_SUAT_KKH_KHDN_Upper :  LAI_SUAT_KKH_KHDN_Upper,
        LAI_SUAT_KKH_KHDNL_TONGKHOI :  LAI_SUAT_KKH_KHDNL_TONGKHOI,
        LAI_SUAT_KKH_KHDNL_Non_PVN :  LAI_SUAT_KKH_KHDNL_Non_PVN,
        LAI_SUAT_KKH_KHDNL_PVN :  LAI_SUAT_KKH_KHDNL_PVN,
        LAI_SUAT_CKH_TOANHANG_TOANHANG :  LAI_SUAT_CKH_TOANHANG_TOANHANG,
        LAI_SUAT_CKH_KHCN_TONGKHOI :  LAI_SUAT_CKH_KHCN_TONGKHOI,
        LAI_SUAT_CKH_KHCN_6M :  LAI_SUAT_CKH_KHCN_6M,
        LAI_SUAT_CKH_KHCN_6M9M :  LAI_SUAT_CKH_KHCN_6M9M,
        LAI_SUAT_CKH_KHCN_9M12M :  LAI_SUAT_CKH_KHCN_9M12M,
        LAI_SUAT_CKH_KHCN_12M :  LAI_SUAT_CKH_KHCN_12M,
        LAI_SUAT_CKH_KHDN_TONGKHOI :  LAI_SUAT_CKH_KHDN_TONGKHOI,
        LAI_SUAT_CKH_KHDN_Core :  LAI_SUAT_CKH_KHDN_Core,
        LAI_SUAT_CKH_KHDN_Upper :  LAI_SUAT_CKH_KHDN_Upper,
        LAI_SUAT_CKH_KHDNL_TONGKHOI :  LAI_SUAT_CKH_KHDNL_TONGKHOI,
        LAI_SUAT_CKH_KHDNL_PVN :  LAI_SUAT_CKH_KHDNL_PVN,
        LAI_SUAT_CKH_KHDNL_Non_PVN :  LAI_SUAT_CKH_KHDNL_Non_PVN,

        BIEN_DO_CONG_KHCN_TONGKHOI:BIEN_DO_CONG_KHCN_TONGKHOI,
        BIEN_DO_CONG_KHCN_6M:BIEN_DO_CONG_KHCN_6M,
        BIEN_DO_CONG_KHCN_6M9M: BIEN_DO_CONG_KHCN_6M9M,
        BIEN_DO_CONG_KHCN_9M12M: BIEN_DO_CONG_KHCN_9M12M,
        BIEN_DO_CONG_KHCN_12M: BIEN_DO_CONG_KHCN_12M,
        BIEN_DO_CONG_KHDN_TONGKHOI : BIEN_DO_CONG_KHDN_TONGKHOI,
        BIEN_DO_CONG_KHDN_Core : BIEN_DO_CONG_KHDN_Core,
        BIEN_DO_CONG_KHDN_Upper : BIEN_DO_CONG_KHDN_Upper,
        BIEN_DO_CONG_KHDNL_TONGKHOI : BIEN_DO_CONG_KHDNL_TONGKHOI,
        BIEN_DO_CONG_KHDNL_PVN : BIEN_DO_CONG_KHDNL_PVN,
        BIEN_DO_CONG_KHDNL_Non_PVN : BIEN_DO_CONG_KHDNL_Non_PVN,
        SO_DU_BIEN_DO_CONG_KHCN_TONGKHOI : SO_DU_BIEN_DO_CONG_KHCN_TONGKHOI,
        SO_DU_BIEN_DO_CONG_KHCN_6M : SO_DU_BIEN_DO_CONG_KHCN_6M,
        SO_DU_BIEN_DO_CONG_KHCN_6M9M : SO_DU_BIEN_DO_CONG_KHCN_6M9M,
        SO_DU_BIEN_DO_CONG_KHCN_9M12M : SO_DU_BIEN_DO_CONG_KHCN_9M12M,
        SO_DU_BIEN_DO_CONG_KHCN_12M : SO_DU_BIEN_DO_CONG_KHCN_12M,
        SO_DU_BIEN_DO_CONG_KHDN_TONGKHOI : SO_DU_BIEN_DO_CONG_KHDN_TONGKHOI,
        SO_DU_BIEN_DO_CONG_KHDN_Core : SO_DU_BIEN_DO_CONG_KHDN_Core,
        SO_DU_BIEN_DO_CONG_KHDN_Upper : SO_DU_BIEN_DO_CONG_KHDN_Upper,
        SO_DU_BIEN_DO_CONG_KHDNL_TONGKHOI : SO_DU_BIEN_DO_CONG_KHDNL_TONGKHOI,
        SO_DU_BIEN_DO_CONG_KHDNL_PVN : SO_DU_BIEN_DO_CONG_KHDNL_PVN,
        SO_DU_BIEN_DO_CONG_KHDNL_Non_PVN : SO_DU_BIEN_DO_CONG_KHDNL_Non_PVN
        
    })
}

const reportDailyTableSelect = async (req,res) => {
    let CIF = req.session.CIF
    let staff = await staffServices.getStaffInfo(CIF)
    let date = req.params.date
    let Rptdate = date.replaceAll('-','')

    // QUY_MO_KKH
    let QUY_MO_KKH_TOANHANG_TOANHANG = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','QUY_MO_KKH')
    let QUY_MO_KKH_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','QUY_MO_KKH')
    let QUY_MO_KKH_KHDN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','QUY_MO_KKH')
    let QUY_MO_KKH_KHDN_Core = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','QUY_MO_KKH')
    let QUY_MO_KKH_KHDN_Upper = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','QUY_MO_KKH')
    let QUY_MO_KKH_KHDNL_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','TONG_KHOI','QUY_MO_KKH')
    let QUY_MO_KKH_KHDNL_Non_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','QUY_MO_KKH')
    let QUY_MO_KKH_KHDNL_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','QUY_MO_KKH')
   
    // QUY_MO_CKH
    let QUY_MO_CKH_TOANHANG_TOANHANG = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','QUY_MO_CKH')
    let QUY_MO_CKH_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','QUY_MO_CKH')
    let QUY_MO_CKH_KHCN_6M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','1. <6M','QUY_MO_CKH')
    let QUY_MO_CKH_KHCN_6M9M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','2. 6-<9M','QUY_MO_CKH')
    let QUY_MO_CKH_KHCN_9M12M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','3. 9-<12M','QUY_MO_CKH')
    let QUY_MO_CKH_KHCN_12M= await dailyServices.getDataHDVDaily(Rptdate,'KHCN','4. >=12M','QUY_MO_CKH')
    let QUY_MO_CKH_KHDN_TONGKHOI= await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','QUY_MO_CKH')
    let QUY_MO_CKH_KHDN_Core= await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','QUY_MO_CKH')
    let QUY_MO_CKH_KHDN_Upper= await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','QUY_MO_CKH')
    let QUY_MO_CKH_KHDNL_TONGKHOI= await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','QUY_MO_CKH')
    let QUY_MO_CKH_KHDNL_PVN= await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','QUY_MO_CKH')
    let QUY_MO_CKH_KHDNL_Non_PVN= await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','QUY_MO_CKH')
    
    // LAI_SUAT_KHD
    let LAI_SUAT_KKH_TOANHANG_TOANHANG = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHDN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHDN_Core = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHDN_Upper = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHDNL_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','TONG_KHOI','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHDNL_Non_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','LAI_SUAT_KKH')
    let LAI_SUAT_KKH_KHDNL_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','LAI_SUAT_KKH')
    
    // LAI_SUAT_CKH
    let LAI_SUAT_CKH_TOANHANG_TOANHANG = await dailyServices.getDataHDVDaily(Rptdate,'TOAN_HANG','TOAN_HANG','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHCN_6M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','1. <6M','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHCN_6M9M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','2. 6-<9M','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHCN_9M12M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','3. 9-<12M','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHCN_12M= await dailyServices.getDataHDVDaily(Rptdate,'KHCN','4. >=12M','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHDN_TONGKHOI= await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHDN_Core= await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHDN_Upper= await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHDNL_TONGKHOI= await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHDNL_PVN= await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','LAI_SUAT_CKH')
    let LAI_SUAT_CKH_KHDNL_Non_PVN= await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','LAI_SUAT_CKH')

    //BIEN_DO_CONG
    let BIEN_DO_CONG_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHCN_6M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','1. <6M','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHCN_6M9M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','2. 6-<9M','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHCN_9M12M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','3. 9-<12M','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHCN_12M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','4. >=12M','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHDN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHDN_Core = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHDN_Upper = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHDNL_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','TONG_KHOI','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHDNL_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','BIEN_DO_CONG')
    let BIEN_DO_CONG_KHDNL_Non_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','BIEN_DO_CONG')

    //SO_DU_BIEN_DO_CONG
    let SO_DU_BIEN_DO_CONG_KHCN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','TONG_KHOI','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHCN_6M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','1. <6M','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHCN_6M9M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','2. 6-<9M','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHCN_9M12M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','3. 9-<12M','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHCN_12M = await dailyServices.getDataHDVDaily(Rptdate,'KHCN','4. >=12M','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHDN_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','TONG_KHOI','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHDN_Core = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Core','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHDN_Upper = await dailyServices.getDataHDVDaily(Rptdate,'KHDN','Upper','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHDNL_TONGKHOI = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','TONG_KHOI','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHDNL_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','PVN','SO_DU_BIEN_DO_CONG')
    let SO_DU_BIEN_DO_CONG_KHDNL_Non_PVN = await dailyServices.getDataHDVDaily(Rptdate,'KHDNL','Non-PVN','SO_DU_BIEN_DO_CONG')

    

    return res.render('report_daily_table',{
        pageTitle: 'Báo cáo ngày',
        staff:staff,
        date: date,
        QUY_MO_KKH_TOANHANG_TOANHANG :  QUY_MO_KKH_TOANHANG_TOANHANG,    
        QUY_MO_KKH_KHCN_TONGKHOI :  QUY_MO_KKH_KHCN_TONGKHOI,
        QUY_MO_KKH_KHDN_TONGKHOI :  QUY_MO_KKH_KHDN_TONGKHOI,
        QUY_MO_KKH_KHDN_Core : QUY_MO_KKH_KHDN_Core,
        QUY_MO_KKH_KHDN_Upper :  QUY_MO_KKH_KHDN_Upper,
        QUY_MO_KKH_KHDNL_TONGKHOI :  QUY_MO_KKH_KHDNL_TONGKHOI,
        QUY_MO_KKH_KHDNL_Non_PVN :  QUY_MO_KKH_KHDNL_Non_PVN,
        QUY_MO_KKH_KHDNL_PVN :  QUY_MO_KKH_KHDNL_PVN,
        QUY_MO_CKH_TOANHANG_TOANHANG :  QUY_MO_CKH_TOANHANG_TOANHANG,
        QUY_MO_CKH_KHCN_TONGKHOI :  QUY_MO_CKH_KHCN_TONGKHOI,
        QUY_MO_CKH_KHCN_6M :  QUY_MO_CKH_KHCN_6M,
        QUY_MO_CKH_KHCN_6M9M :  QUY_MO_CKH_KHCN_6M9M,
        QUY_MO_CKH_KHCN_9M12M :  QUY_MO_CKH_KHCN_9M12M,
        QUY_MO_CKH_KHCN_12M :  QUY_MO_CKH_KHCN_12M,
        QUY_MO_CKH_KHDN_TONGKHOI :  QUY_MO_CKH_KHDN_TONGKHOI,
        QUY_MO_CKH_KHDN_Core :  QUY_MO_CKH_KHDN_Core,
        QUY_MO_CKH_KHDN_Upper :  QUY_MO_CKH_KHDN_Upper,
        QUY_MO_CKH_KHDNL_TONGKHOI :  QUY_MO_CKH_KHDNL_TONGKHOI,
        QUY_MO_CKH_KHDNL_PVN :  QUY_MO_CKH_KHDNL_PVN,
        QUY_MO_CKH_KHDNL_Non_PVN :  QUY_MO_CKH_KHDNL_Non_PVN,

        LAI_SUAT_KKH_TOANHANG_TOANHANG :  LAI_SUAT_KKH_TOANHANG_TOANHANG,    
        LAI_SUAT_KKH_KHCN_TONGKHOI :  LAI_SUAT_KKH_KHCN_TONGKHOI,
        LAI_SUAT_KKH_KHDN_TONGKHOI :  LAI_SUAT_KKH_KHDN_TONGKHOI,
        LAI_SUAT_KKH_KHDN_Core : LAI_SUAT_KKH_KHDN_Core,
        LAI_SUAT_KKH_KHDN_Upper :  LAI_SUAT_KKH_KHDN_Upper,
        LAI_SUAT_KKH_KHDNL_TONGKHOI :  LAI_SUAT_KKH_KHDNL_TONGKHOI,
        LAI_SUAT_KKH_KHDNL_Non_PVN :  LAI_SUAT_KKH_KHDNL_Non_PVN,
        LAI_SUAT_KKH_KHDNL_PVN :  LAI_SUAT_KKH_KHDNL_PVN,
        LAI_SUAT_CKH_TOANHANG_TOANHANG :  LAI_SUAT_CKH_TOANHANG_TOANHANG,
        LAI_SUAT_CKH_KHCN_TONGKHOI :  LAI_SUAT_CKH_KHCN_TONGKHOI,
        LAI_SUAT_CKH_KHCN_6M :  LAI_SUAT_CKH_KHCN_6M,
        LAI_SUAT_CKH_KHCN_6M9M :  LAI_SUAT_CKH_KHCN_6M9M,
        LAI_SUAT_CKH_KHCN_9M12M :  LAI_SUAT_CKH_KHCN_9M12M,
        LAI_SUAT_CKH_KHCN_12M :  LAI_SUAT_CKH_KHCN_12M,
        LAI_SUAT_CKH_KHDN_TONGKHOI :  LAI_SUAT_CKH_KHDN_TONGKHOI,
        LAI_SUAT_CKH_KHDN_Core :  LAI_SUAT_CKH_KHDN_Core,
        LAI_SUAT_CKH_KHDN_Upper :  LAI_SUAT_CKH_KHDN_Upper,
        LAI_SUAT_CKH_KHDNL_TONGKHOI :  LAI_SUAT_CKH_KHDNL_TONGKHOI,
        LAI_SUAT_CKH_KHDNL_PVN :  LAI_SUAT_CKH_KHDNL_PVN,
        LAI_SUAT_CKH_KHDNL_Non_PVN :  LAI_SUAT_CKH_KHDNL_Non_PVN,

        BIEN_DO_CONG_KHCN_TONGKHOI:BIEN_DO_CONG_KHCN_TONGKHOI,
        BIEN_DO_CONG_KHCN_6M:BIEN_DO_CONG_KHCN_6M,
        BIEN_DO_CONG_KHCN_6M9M: BIEN_DO_CONG_KHCN_6M9M,
        BIEN_DO_CONG_KHCN_9M12M: BIEN_DO_CONG_KHCN_9M12M,
        BIEN_DO_CONG_KHCN_12M: BIEN_DO_CONG_KHCN_12M,
        BIEN_DO_CONG_KHDN_TONGKHOI : BIEN_DO_CONG_KHDN_TONGKHOI,
        BIEN_DO_CONG_KHDN_Core : BIEN_DO_CONG_KHDN_Core,
        BIEN_DO_CONG_KHDN_Upper : BIEN_DO_CONG_KHDN_Upper,
        BIEN_DO_CONG_KHDNL_TONGKHOI : BIEN_DO_CONG_KHDNL_TONGKHOI,
        BIEN_DO_CONG_KHDNL_PVN : BIEN_DO_CONG_KHDNL_PVN,
        BIEN_DO_CONG_KHDNL_Non_PVN : BIEN_DO_CONG_KHDNL_Non_PVN,
        SO_DU_BIEN_DO_CONG_KHCN_TONGKHOI : SO_DU_BIEN_DO_CONG_KHCN_TONGKHOI,
        SO_DU_BIEN_DO_CONG_KHCN_6M : SO_DU_BIEN_DO_CONG_KHCN_6M,
        SO_DU_BIEN_DO_CONG_KHCN_6M9M : SO_DU_BIEN_DO_CONG_KHCN_6M9M,
        SO_DU_BIEN_DO_CONG_KHCN_9M12M : SO_DU_BIEN_DO_CONG_KHCN_9M12M,
        SO_DU_BIEN_DO_CONG_KHCN_12M : SO_DU_BIEN_DO_CONG_KHCN_12M,
        SO_DU_BIEN_DO_CONG_KHDN_TONGKHOI : SO_DU_BIEN_DO_CONG_KHDN_TONGKHOI,
        SO_DU_BIEN_DO_CONG_KHDN_Core : SO_DU_BIEN_DO_CONG_KHDN_Core,
        SO_DU_BIEN_DO_CONG_KHDN_Upper : SO_DU_BIEN_DO_CONG_KHDN_Upper,
        SO_DU_BIEN_DO_CONG_KHDNL_TONGKHOI : SO_DU_BIEN_DO_CONG_KHDNL_TONGKHOI,
        SO_DU_BIEN_DO_CONG_KHDNL_PVN : SO_DU_BIEN_DO_CONG_KHDNL_PVN,
        SO_DU_BIEN_DO_CONG_KHDNL_Non_PVN : SO_DU_BIEN_DO_CONG_KHDNL_Non_PVN
        
    })
}

module.exports = {
    reportDailyTable: reportDailyTable,
    reportDailyTableSelect: reportDailyTableSelect
}