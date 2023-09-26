from models.kneset_member import KnesetMember
from models.opinion import Opinion
from models.topic import Topic


# ----------------- #
# 6 diffrent topics in total.
topic_education = Topic("education", "anything about the way of learning and a new things to upgrade the education level in israel")
topic_inflation = Topic("inflation", "opinion about inflation")
topic_Transportation = Topic("Transportation", "opinion about transportation")
topic_security = Topic("security", "general security opinion")
topic_iran = Topic("iran nuclear threat", "opinions about the nuclear threat")
topic_Israeli_Palestinian = Topic("Israeli-Palestinian conflict and solution", "Israeli-Palestinian conflict and solution")
# ----------------- #
# 13 diffrent knesset members
benjamin_N = KnesetMember("Benjamin Netanyahu", "Likud","Prime minister", "some info here")
yariv_l = KnesetMember("Yariv Levin", "Likud", "Minister of Justice", "some info here")
yoav_g = KnesetMember("Yoav Gallant", "Likud", "Minister of Defence Forces", "some info here")
amir_o = KnesetMember("Amir Ohana", "Likud", "Speaker of the Knesset", "some info here")
aryeh_d = KnesetMember("Aryeh Deri", "Shas", "N/A", "some info here")
itamar_bg = KnesetMember("Itamar Ben-Gvir", "Otzma Yehudit", "Minister of National Security", "some info here")
yair_l = KnesetMember("Yair Lapid", "Yesh Atid", "Leader of the Opposition", "some info here")
yorai_lh = KnesetMember("Yorai Lahav-Hertzanu", "Yesh Atid", "N/A", "some info here")
benjamin_g = KnesetMember("Benjamin Gantz", "National Unity", "N/A", "also called Benny Gantz")
gadi_e = KnesetMember("Gadi Eizenkot", "National Unity", "N/A", "some info here")
gideon_s = KnesetMember("Gideon Sa'ar", "National Unity", "N/A", "some info here")
yifat_sb = KnesetMember("Yifat Shasha-Biton", "National Unity", "N/A", "some info here")
merav_m = KnesetMember("Merav Michaeli", "Labor", "N/A", "some info here")
# ----------------- #
# 13 diffrent opinions
['STRONGLY OPPOSES', 'OPPOSES', 'NEUTRAL', 'SUPPORTS', 'STRONGLY SUPPORTS']
benjaminn_edu = Opinion(benjamin_N.id, topic_education.id, 2, "www.google.com")
yifatsb_edu = Opinion(yifat_sb.id, topic_education.id, 5, "www.google.com")

yarivl_ilpl = Opinion(yariv_l.id, topic_Israeli_Palestinian.id, 5, "www.google.com")
itamar_ilpl = Opinion(itamar_bg.id, topic_Israeli_Palestinian.id, 1, "www.google.com")

yoavg_sec = Opinion(yoav_g.id, topic_security.id, 4, "www.google.com")
benjaming_sec = Opinion(benjamin_g.id, topic_inflation.id, 4, "www.google.com")

aryehd_trans = Opinion(aryeh_d.id, topic_Transportation.id, 1, "www.google.com")
gideons_trans = Opinion(gideon_s.id, topic_Transportation.id, 3, "www.google.com")

yairl_iran = Opinion(yair_l.id, topic_iran.id, 4, "www.google.com")
yorailh_iran = Opinion(yorai_lh.id, topic_iran.id, 2, "www.google.com")

gadie_inf = Opinion(gadi_e.id, topic_inflation.id, 1, "www.google.com")
amiro_inf = Opinion(amir_o.id, topic_inflation.id, 4, "www.google.com")
meravm_inf = Opinion(merav_m.id, topic_inflation.id, 5, "www.google.com")