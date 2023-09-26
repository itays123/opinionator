from models.kneset_member import KnesetMember
from models.opinion import Opinion, OpinionType
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
benjaminn_edu = Opinion(benjamin_N.mpId, topic_education.topicId, OpinionType.OPPOSES, "www.google.com")
yifatsb_edu = Opinion(yifat_sb.mpId, topic_education.topicId, OpinionType.STRONGLY_SUPPORTS, "www.google.com")

yarivl_ilpl = Opinion(yariv_l.mpId, topic_Israeli_Palestinian.topicId, OpinionType.STRONGLY_SUPPORTS, "www.google.com")
itamar_ilpl = Opinion(itamar_bg.mpId, topic_Israeli_Palestinian.topicId, OpinionType.STRONGLY_OPPOSES, "www.google.com")

yoavg_sec = Opinion(yoav_g.mpId, topic_security.topicId, OpinionType.SUPPORTS, "www.google.com")
benjaming_sec = Opinion(benjamin_g.mpId, topic_inflation.topicId, OpinionType.SUPPORTS, "www.google.com")

aryehd_trans = Opinion(aryeh_d.mpId, topic_Transportation.topicId, OpinionType.STRONGLY_OPPOSES, "www.google.com")
gideons_trans = Opinion(gideon_s.mpId, topic_Transportation.topicId, OpinionType.NEUTRAL, "www.google.com")

yairl_iran = Opinion(yair_l.mpId, topic_iran.topicId, OpinionType.SUPPORTS, "www.google.com")
yorailh_iran = Opinion(yorai_lh.mpId, topic_iran.topicId, OpinionType.OPPOSES, "www.google.com")

gadie_inf = Opinion(gadi_e.mpId, topic_inflation.topicId, OpinionType.STRONGLY_OPPOSES, "www.google.com")
amiro_inf = Opinion(amir_o.mpId, topic_inflation.topicId, OpinionType.SUPPORTS, "www.google.com")
meravm_inf = Opinion(merav_m.mpId, topic_inflation.topicId, OpinionType.STRONGLY_SUPPORTS, "www.google.com")