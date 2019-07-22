import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import BlockQuote from '../common/BlockQuote';

const useStyles = makeStyles(theme => ({
  container: {
    margin: 0,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    columnWidth: '31em',
    columnGap: theme.spacing(4),
    columnRule: `1px dotted #333333`
  },
  content: {
    maxWidth: 500
  }
}));

const MissionLetter = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography
        gutterBottom
        variant="body1"
        component="p"
        className={classes.content}
      >
        Sarasota Christian Fellowship is a non-denominational fellowship with
        our roots in the Restoration movement. We strongly embrace the scripture
        in 1 John 4:11-12 which states,
      </Typography>
      <BlockQuote
        quote={`"Dear friends, since God so loved us, we also ought to love one
            another. No one has ever seen God; but if we love one another, God
            lives in us and his love is made complete in us"`}
      />
      <Typography
        gutterBottom
        variant="body1"
        component="p"
        className={classes.content}
      >
        Loving God is the motivation for everything we do in our Christian walk,
        both in our relationships with one another and in our personal lives. As
        a fellowship, we call every member to have deep convictions in matters
        of personal righteousness, discipleship and evangelism. Many churches
        hold these principles as lofty ideals, while in reality they are treated
        as optional. Consequently, many churches are comprised of numerous
        lukewarm members, which is a poor witness to the world and contrary to
        what the Bible teaches.
      </Typography>
      <Typography
        gutterBottom
        variant="body1"
        component="p"
        className={classes.content}
      >
        Another concern promoting the need for a new fellowship is the ‘doctrine
        of salvation’ which is taught incorrectly in many churches. Luke
        14:28-30 states,
      </Typography>
      <BlockQuote
        quote={`"Suppose one of you wants to build a tower. Will he not first sit down and estimate the cost to see if he has enough money to complete it? For if he lays the foundation and is not able to finish it, everyone who sees it will ridicule him, saying, 'This fellow began to build and was not able to finish.'"`}
      />

      <Typography
        gutterBottom
        variant="body1"
        component="p"
        className={classes.content}
      >
        The Bible makes it clear that when someone wants to become a Christian,
        they must count the cost regarding the challenges, sacrifices, and
        commitment they are pledging to the Lord. These principles are
        fundamental expectations for every person seeking a true relationship
        with Jesus Christ. The Sarasota Christian Fellowship is a congregation
        that promotes conviction over shallow commitment.
      </Typography>
      <Typography
        gutterBottom
        variant="body1"
        component="p"
        className={classes.content}
      >
        The Sarasota Christian Fellowship is dedicated to helping all its
        members to become biblically literate through personal, daily devotional
        times with God (quiet times) as well as corporate teaching times as a
        church. Each member is called to mature in their faith and be
        spiritually equipped to teach others (how to become a Christian and how
        to grow as a Christian). This is not only the responsibility of church
        leaders, but the responsibility of each and every disciple.
      </Typography>

      <Typography
        gutterBottom
        variant="body1"
        component="p"
        className={classes.content}
      >
        An exciting emphasis of our church is the fellowship of the believers.
        Acts 2:42 states,
      </Typography>
      <BlockQuote
        quote={`“They devoted themselves to the apostles' teaching and to the
            fellowship, to the breaking of bread and to prayer.”`}
      />

      <Typography
        gutterBottom
        variant="body1"
        component="p"
        className={classes.content}
      >
        Unlike many churches, our worship doesn’t end after the last Amen. We
        come together to share a meal after every service which is where we
        strengthen and encourage one another in our faith. This fosters the
        building of strong, life-long relationships.
      </Typography>
      <Typography
        gutterBottom
        variant="body1"
        component="p"
        className={classes.content}
      >
        If you are looking for a meaningful relationship with the Lord Jesus, a
        deep and loving fellowship with fellow believers, then we cordially
        invite you to join us. Our anticipation is that the city of Sarasota
        will never be same. We want to foster a spiritual revival that will
        shake the foundations in this part of the world.
      </Typography>
    </div>
  );
};

export default MissionLetter;
