import Mail from "@/assets/icon/mail.svg?inline"
import Glob from "@/assets/icon/glob.svg?inline"
import Github from "@/assets/icon/github_new.svg?inline"
import siteMetaInfo from "@/data/sitemetainfo"

export default {
	components: { Mail, Glob, Github },
	data() {
		return {
			siteMetadata: siteMetaInfo,
		}
	},
};